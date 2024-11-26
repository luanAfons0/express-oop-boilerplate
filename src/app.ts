import middlewares from "./middlewares/middlewares";
import ErrorHandler from "./helpers/error-handler";
import express, { Express } from "express";
import routes from "./routes/routes";
import "dotenv/config";

class App {
    private readonly app: Express;
    private readonly port: number = Number(process.env.PORT) || 3000;

    constructor() {
        this.app = express();
        this.init();
    }

    private init() {
        this.initMiddlewares();
        this.initRoutes();
        this.initErrorHandler();
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