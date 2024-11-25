import health_check_route from "./routes/health_check_route";
import express, { Express } from "express";
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
        this.app.use("/api/v1/", health_check_route);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("Server is up and running...")
        })
    }
}

export default App;