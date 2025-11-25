import { Shipment, ShipmentRepository } from "../../domain/shipment";

export class InMemoryShipmentRepository implements ShipmentRepository {
    private shipments: Shipment[] = [
        {
            id: "1",
            trackingNumber: "TN12345678",
            origin: "New York, USA",
            destination: "London, UK",
            transportMode: "air",
            status: "in_transit",
            estimatedDelivery: "2023-12-01T10:00:00Z",
        },
        {
            id: "2",
            trackingNumber: "TN87654321",
            origin: "Shanghai, China",
            destination: "Los Angeles, USA",
            transportMode: "sea",
            status: "delayed",
            estimatedDelivery: "2023-12-15T14:00:00Z",
        },
        {
            id: "3",
            trackingNumber: "TN11223344",
            origin: "Berlin, Germany",
            destination: "Paris, France",
            transportMode: "land",
            status: "arrived",
            estimatedDelivery: "2023-11-20T09:00:00Z",
        },
        {
            id: "4",
            trackingNumber: "TN55667788",
            origin: "Tokyo, Japan",
            destination: "Sydney, Australia",
            transportMode: "air",
            status: "in_transit",
            estimatedDelivery: "2023-12-05T18:00:00Z",
        },
        {
            id: "5",
            trackingNumber: "TN99887766",
            origin: "Sao Paulo, Brazil",
            destination: "Miami, USA",
            transportMode: "air",
            status: "in_transit",
            estimatedDelivery: "2023-12-02T12:00:00Z",
        },
        {
            id: "6",
            trackingNumber: "TN44332211",
            origin: "Mumbai, India",
            destination: "Dubai, UAE",
            transportMode: "sea",
            status: "arrived",
            estimatedDelivery: "2023-11-25T16:00:00Z",
        },
        {
            id: "7",
            trackingNumber: "TN66554433",
            origin: "Toronto, Canada",
            destination: "Vancouver, Canada",
            transportMode: "land",
            status: "delayed",
            estimatedDelivery: "2023-12-10T11:00:00Z",
        },
        {
            id: "8",
            trackingNumber: "TN22114433",
            origin: "Seoul, South Korea",
            destination: "San Francisco, USA",
            transportMode: "air",
            status: "in_transit",
            estimatedDelivery: "2023-12-08T20:00:00Z",
        },
        {
            id: "9",
            trackingNumber: "TN77889900",
            origin: "Cape Town, South Africa",
            destination: "Cairo, Egypt",
            transportMode: "air",
            status: "in_transit",
            estimatedDelivery: "2023-12-03T15:00:00Z",
        },
        {
            id: "10",
            trackingNumber: "TN00998877",
            origin: "Mexico City, Mexico",
            destination: "Bogota, Colombia",
            transportMode: "land",
            status: "arrived",
            estimatedDelivery: "2023-11-28T13:00:00Z",
        },
        {
            id: "11",
            trackingNumber: "TN12312312",
            origin: "Madrid, Spain",
            destination: "Rome, Italy",
            transportMode: "land",
            status: "in_transit",
            estimatedDelivery: "2023-12-04T10:00:00Z",
        },
        {
            id: "12",
            trackingNumber: "TN45645645",
            origin: "Singapore",
            destination: "Hong Kong",
            transportMode: "sea",
            status: "delayed",
            estimatedDelivery: "2023-12-12T14:00:00Z",
        },
        {
            id: "13",
            trackingNumber: "TN78978978",
            origin: "Buenos Aires, Argentina",
            destination: "Santiago, Chile",
            transportMode: "land",
            status: "arrived",
            estimatedDelivery: "2023-11-22T17:00:00Z",
        },
        {
            id: "14",
            trackingNumber: "TN32132132",
            origin: "Moscow, Russia",
            destination: "Beijing, China",
            transportMode: "land",
            status: "in_transit",
            estimatedDelivery: "2023-12-06T09:00:00Z",
        },
        {
            id: "15",
            trackingNumber: "TN65465465",
            origin: "Istanbul, Turkey",
            destination: "Athens, Greece",
            transportMode: "sea",
            status: "in_transit",
            estimatedDelivery: "2023-12-01T11:00:00Z",
        }
    ];

    async findAll(): Promise<Shipment[]> {
        return this.shipments;
    }

    async findById(id: string): Promise<Shipment | null> {
        return this.shipments.find((s) => s.id === id) || null;
    }

    async updateStatus(id: string, status: Shipment["status"]): Promise<void> {
        const shipment = this.shipments.find((s) => s.id === id);
        if (shipment) {
            shipment.status = status;
        }
    }

    async create(shipment: Shipment): Promise<void> {
        this.shipments.push(shipment);
    }
}
