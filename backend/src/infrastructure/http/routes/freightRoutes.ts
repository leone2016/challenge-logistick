import { Router } from "express";
import { FreightController } from "../controllers/freightController";
import { FreightService } from "../../../application/freightService";
import { InMemoryFreightRepository } from "../../persistence/inMemoryFreightRepository";

const router = Router();

// Dependency Injection
const freightRepository = new InMemoryFreightRepository();
const freightService = new FreightService(freightRepository);
const freightController = new FreightController(freightService);

router.get("/", freightController.getAll);

export { router as freightRoutes };
