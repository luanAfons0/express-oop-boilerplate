import express, { Router } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

class Middlewares {
    public readonly router: Router;

    constructor() {
        this.router = Router();
        this.initMiddlewares();
    }

    private initMiddlewares() {
        this.router.use(cors());
        this.router.use(helmet());
        this.router.use(express.json());
        this.router.use(express.urlencoded({ extended: true }));
        this.router.use(morgan("dev"));
    }
}

export default new Middlewares().router;