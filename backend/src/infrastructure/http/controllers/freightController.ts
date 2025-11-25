import { Request, Response, NextFunction } from "express";
import { FreightService } from "../../../application/freightService";

export class FreightController {
    constructor(private readonly freightService: FreightService) { }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const freightItems = await this.freightService.getAllFreight();
            res.json(freightItems);
        } catch (error) {
            next(error);
        }
    };
}
