import express from "express";
import cors from "cors";
import { shipmentRoutes } from "./infrastructure/http/routes/shipmentRoutes";
import { errorHandler } from "./infrastructure/http/middlewares/errorHandler";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/shipments", shipmentRoutes);

// Error Handling
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
