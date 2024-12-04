import { Request, Response } from "express";
import UserService from "../services/user-service";

class UserController {
    private readonly user_service: UserService;

    constructor() {
        this.user_service = new UserService();
    }

    public post = async (req: Request, res: Response) => {
        try {
            const body = req.body;
            const response = await this.user_service.create(body);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default UserController;
