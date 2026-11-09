import express from "express";
import cors from "cors";

const PORT = 8081;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send({
        message: "Welcome to FleetDash Server!",
        developer: "Ganesh",
        project: "Fleet Telemetry Dashboard",
        status: "Server is running successfully"
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});