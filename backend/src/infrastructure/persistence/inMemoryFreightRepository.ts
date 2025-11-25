import { FreightItem, FreightRepository } from "../../domain/freight";

export class InMemoryFreightRepository implements FreightRepository {
    private freightItems: FreightItem[] = [];

    constructor() {
        this.generateMockData();
    }

    private generateMockData() {
        const customers = ["Amazon", "Alibaba", "DHL", "FedEx", "Maersk", "Walmart", "Target", "IKEA", "Toyota", "Samsung"];
        const cities = ["New York", "London", "Shanghai", "Tokyo", "Berlin", "Paris", "Sydney", "Dubai", "Singapore", "Los Angeles", "Mumbai", "Toronto", "Sao Paulo", "Mexico City", "Moscow"];
        const transports: ("air" | "sea" | "land")[] = ["air", "sea", "land"];
        const statuses: ("pending" | "in_transit" | "delivered" | "canceled")[] = ["pending", "in_transit", "delivered", "canceled"];

        for (let i = 0; i < 150; i++) {
            const origin = cities[Math.floor(Math.random() * cities.length)];
            let destination = cities[Math.floor(Math.random() * cities.length)];
            while (destination === origin) {
                destination = cities[Math.floor(Math.random() * cities.length)];
            }

            const departureDate = new Date();
            departureDate.setDate(departureDate.getDate() - Math.floor(Math.random() * 30));

            const arrivalDate = new Date(departureDate);
            arrivalDate.setDate(arrivalDate.getDate() + Math.floor(Math.random() * 60) + 1);

            this.freightItems.push({
                id: (i + 1).toString(),
                customer: customers[Math.floor(Math.random() * customers.length)],
                origin,
                destination,
                weight: Math.floor(Math.random() * 1000) + 10,
                volume: parseFloat((Math.random() * 10 + 0.1).toFixed(2)),
                transport: transports[Math.floor(Math.random() * transports.length)],
                status: statuses[Math.floor(Math.random() * statuses.length)],
                cost: Math.floor(Math.random() * 5000) + 100,
                departureDate: departureDate.toISOString(),
                arrivalDate: arrivalDate.toISOString(),
            });
        }
    }

    async findAll(): Promise<FreightItem[]> {
        return this.freightItems;
    }
}
