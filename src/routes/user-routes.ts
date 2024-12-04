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
    this.router.post("/user", this.user_controller.create);
    this.router.get("/users/all", this.user_controller.getAll);
    this.router.get("/user/:id", this.user_controller.getById);
    this.router.patch("/user/:id", this.user_controller.update);
    this.router.delete("/user/:id", this.user_controller.delete);
  }
}

export default new UserRoutes().router;
