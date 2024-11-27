import HealthCheckController from "../controllers/health-check-controller";
import { Router } from "express";

class HealthCheckRoute implements IRouter {
  private readonly health_check_controller: HealthCheckController;
  public readonly router: Router;

  constructor() {
    this.health_check_controller = new HealthCheckController();
    this.router = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/health-check", this.health_check_controller.get);
  }
}

export default new HealthCheckRoute().router;
