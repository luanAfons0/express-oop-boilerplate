import { Request, Response } from "express";
import UserService from "../services/user-service";

class UserController {
  private readonly user_service: UserService;

  constructor() {
    this.user_service = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const response = await this.user_service.create(body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public getAll = async (req: Request, res: Response) => {
    try {
      const response = await this.user_service.findAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const response = await this.user_service.findById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const response = await this.user_service.updateById(id, body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const response = await this.user_service.deleteById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default UserController;
