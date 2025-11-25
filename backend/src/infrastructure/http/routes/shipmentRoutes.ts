import { Router } from "express";
import { ShipmentController } from "../controllers/shipmentController";
import { ShipmentService } from "../../../application/shipmentService";
import { InMemoryShipmentRepository } from "../../persistence/inMemoryShipmentRepository";

const router = Router();

// Dependency Injection
const shipmentRepository = new InMemoryShipmentRepository();
const shipmentService = new ShipmentService(shipmentRepository);
const shipmentController = new ShipmentController(shipmentService);

router.get("/", shipmentController.getAll);
router.get("/:id", shipmentController.getById);
router.put("/:id/status", shipmentController.updateStatus);
router.post("/", shipmentController.create);

export { router as shipmentRoutes };
