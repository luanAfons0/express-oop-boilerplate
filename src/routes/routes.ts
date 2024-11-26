import health_check_route from "./health_check_route";
import { Router } from "express";

class Routes {
    public readonly routes: Router;

    constructor() {
        this.routes = Router();
    }

    public initRoutes() {
        this.routes.use("/api/v1/", health_check_route);
    }
}

export default new Routes().routes;