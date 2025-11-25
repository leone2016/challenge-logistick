export interface Shipment {
    id: string;
    trackingNumber: string;
    origin: string;
    destination: string;
    transportMode: "air" | "sea" | "land";
    status: "in_transit" | "delayed" | "arrived";
    estimatedDelivery: string; // ISO date
}

export interface ShipmentRepository {
    findAll(): Promise<Shipment[]>;
    findById(id: string): Promise<Shipment | null>;
    updateStatus(id: string, status: Shipment["status"]): Promise<void>;
    create(shipment: Shipment): Promise<void>;
}
