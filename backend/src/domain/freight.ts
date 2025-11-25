export interface FreightItem {
    id: string;
    customer: string;
    origin: string;
    destination: string;
    weight: number; // kg
    volume: number; // m3
    transport: "air" | "sea" | "land";
    status: "pending" | "in_transit" | "delivered" | "canceled";
    cost: number; // USD
    departureDate: string;
    arrivalDate: string;
}

export interface FreightRepository {
    findAll(): Promise<FreightItem[]>;
}
