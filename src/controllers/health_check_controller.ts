import HealthCheckService from "../services/health_check_service";
import IController from "../interfaces/IController";
import { Request, Response } from "express";

class HealthCheckController implements IController<any> {
    public get(req: Request, res: Response) {
        try {
            const health_check_service = new HealthCheckService();
            const response = health_check_service.find();
            res.status(200).json(response);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default HealthCheckController;