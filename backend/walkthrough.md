# Shipment Tracker Backend Walkthrough

I have successfully implemented the backend for the Shipment Tracker Dashboard using Node.js, Express, and TypeScript, following a Hexagonal Architecture.

## Changes Made

### 1. Dependencies
Installed `express`, `cors`, and `ts-node-dev` along with their type definitions.

### 2. Architecture
Implemented a Hexagonal Architecture with the following structure:
- **Domain**: `src/domain/shipment.ts` (Interfaces)
- **Application**: `src/application/shipmentService.ts` (Business Logic)
- **Infrastructure**:
    - **Persistence**: `src/infrastructure/persistence/inMemoryShipmentRepository.ts` (Mock Data)
    - **HTTP**:
        - **Controllers**: `src/infrastructure/http/controllers/shipmentController.ts`
        - **Routes**: `src/infrastructure/http/routes/shipmentRoutes.ts`
        - **Middlewares**: `src/infrastructure/http/middlewares/errorHandler.ts`

### 3. Endpoints
Implemented the following endpoints:
- `GET /shipments`: Returns a list of 15 mock shipments.
- `GET /shipments/:id`: Returns a specific shipment by ID.
- `PUT /shipments/:id/status`: Updates the status of a shipment.
- `POST /shipments`: Creates a new shipment.

## Verification Results

### Automated Tests
Ran `curl` commands to verify the endpoints:

1. **GET /shipments**
   - Returns a JSON array of shipments.
2. **GET /shipments/1**
   - Returns the shipment with ID "1".
3. **PUT /shipments/1/status**
   - Updates status to "arrived" and returns success message.

### Server Status
The server is running on `http://localhost:3000` and is ready for the frontend to connect.
