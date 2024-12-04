import { Router } from "express";
import UserController from "../controllers/user-controller";

class UserRoutes {
  private readonly user_controller: UserController;
  public readonly router: Router;

  constructor() {
    this.user_controller = new UserController();
    this.router = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post("/user", this.user_controller.post);
  }
}

export default new UserRoutes().router;
