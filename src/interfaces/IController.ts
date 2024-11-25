import { Request, Response } from "express";

interface IController<T> {
    get?(req: Request, res: Response): T;
    getAll?(req: Request, res: Response): T[];
    post?(req: Request, res: Response): T;
    patch?(req: Request, res: Response): T;
    put?(req: Request, res: Response): T;
    delete?(req: Request, res: Response): T;
}

export default IController;