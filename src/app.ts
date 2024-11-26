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
    }

    private initMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initRoutes() {
        this.app.use(routes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("Server is up and running...");
        });
    }
}

export default App;