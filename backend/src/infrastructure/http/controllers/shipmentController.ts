import { Request, Response, NextFunction } from "express";
import { ShipmentService } from "../../../application/shipmentService";
import { Shipment } from "../../../domain/shipment";

export class ShipmentController {
    constructor(private readonly shipmentService: ShipmentService) { }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const shipments = await this.shipmentService.getAllShipments();
            res.json(shipments);
        } catch (error) {
            next(error);
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const shipment = await this.shipmentService.getShipmentById(id);
            if (!shipment) {
                res.status(404).json({ message: "Shipment not found" });
                return;
            }
            res.json(shipment);
        } catch (error) {
            next(error);
        }
    };

    updateStatus = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { status } = req.body;

            if (!["in_transit", "delayed", "arrived"].includes(status)) {
                res.status(400).json({ message: "Invalid status" });
                return;
            }

            try {
                await this.shipmentService.updateShipmentStatus(id, status);
                res.json({ message: "Status updated successfully" });
            } catch (error: any) {
                if (error.message === "Shipment not found") {
                    res.status(404).json({ message: "Shipment not found" });
                } else {
                    throw error;
                }
            }
        } catch (error) {
            next(error);
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { trackingNumber, origin, destination, transportMode, status, estimatedDelivery } = req.body;

            if (!trackingNumber || !origin || !destination || !transportMode || !status || !estimatedDelivery) {
                res.status(400).json({ message: "Missing required fields" });
                return;
            }

            const newShipment: Shipment = {
                id: Math.random().toString(36).substr(2, 9), // Simple ID generation
                trackingNumber,
                origin,
                destination,
                transportMode,
                status,
                estimatedDelivery,
            };

            await this.shipmentService.createShipment(newShipment);
            res.status(201).json(newShipment);
        } catch (error) {
            next(error);
        }
    };
}
