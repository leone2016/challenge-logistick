import express from "express";
import cors from "cors";
import { shipmentRoutes } from "./infrastructure/http/routes/shipmentRoutes";
import { freightRoutes } from "./infrastructure/http/routes/freightRoutes";
import { errorHandler } from "./infrastructure/http/middlewares/errorHandler";

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());

// Routes
app.use("/shipments", shipmentRoutes);
app.use("/freight", freightRoutes);

// Error Handling
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
