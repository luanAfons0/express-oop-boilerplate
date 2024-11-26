import { Request, Response } from "express";

class ErrorHandler {
    static notFound(req: Request, res: Response) {
        res.status(404).json({ message: "Resource not found!" });
    }

    static serverError(error: Error, req: Request, res: Response) {
        res.status(500).json({ message: error.message });
    }
}

export default ErrorHandler;