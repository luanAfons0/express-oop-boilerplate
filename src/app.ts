import middlewares from "./middlewares/middlewares";
import ErrorHandler from "./helpers/error-handler";
import { PrismaClient } from "@prisma/client";
import express, { Express } from "express";
import routes from "./routes/routes";
import "dotenv/config";

class App {
  private readonly app: Express;
  private readonly port: number = Number(process.env.PORT) || 3000; // eslint-disable-line

  constructor() {
    this.app = express();
    this.init();
  }

  private init() {
    try {
      this.initDataBase().then(() => {
        this.initMiddlewares();
        this.initRoutes();
        this.initErrorHandler();
      });
    } catch (error) {
      console.log(error.message);
      process.exit(1); // eslint-disable-line
    }
  }

  private async initDataBase() {
    const prisma = new PrismaClient();
    await prisma.$connect();
  }

  private initMiddlewares() {
    this.app.use(middlewares);
  }

  private initRoutes() {
    this.app.use(routes);
  }

  private initErrorHandler() {
    this.app.use(ErrorHandler.notFound);
    this.app.use(ErrorHandler.serverError);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is up on port ${this.port}...`);
    });
  }
}

export default App;
