import HealthCheckService from "../services/health_check_service";
import { Request, Response } from "express";

class HealthCheckController {
    private readonly healthCheckService: HealthCheckService;

    constructor() {
        this.healthCheckService = new HealthCheckService();
    }

    public get = (req: Request, res: Response) => {
        try {
            const response = this.healthCheckService.find();
            res.status(200).json(response);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default HealthCheckController;