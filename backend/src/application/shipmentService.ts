import { Shipment, ShipmentRepository } from "../domain/shipment";

export class ShipmentService {
    constructor(private readonly shipmentRepository: ShipmentRepository) { }

    async getAllShipments(): Promise<Shipment[]> {
        return this.shipmentRepository.findAll();
    }

    async getShipmentById(id: string): Promise<Shipment | null> {
        return this.shipmentRepository.findById(id);
    }

    async updateShipmentStatus(id: string, status: Shipment["status"]): Promise<void> {
        const shipment = await this.shipmentRepository.findById(id);
        if (!shipment) {
            throw new Error("Shipment not found");
        }
        await this.shipmentRepository.updateStatus(id, status);
    }

    async createShipment(shipment: Shipment): Promise<void> {
        await this.shipmentRepository.create(shipment);
    }
}
