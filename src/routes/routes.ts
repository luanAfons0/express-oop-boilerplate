import health_check_route from "./health-check-route";
import user_routes from "./user-routes";
import { Router } from "express";

class Routes {
  public readonly routes: Router;

  constructor() {
    this.routes = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.routes.use("/api/v1/", health_check_route);
    this.routes.use("/api/v1/", user_routes);
  }
}

export default new Routes().routes;
