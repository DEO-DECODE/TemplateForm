import express from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import userRoute from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
// Cretes an instance of express application
dbConnection();
app.use(cors());
app.use(express.json());
// BACKEND SE INTERACTION JO BHI HOGA, WO JSON k form m hoga.
app.use("/api/v1/user", userRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use((err, req, res, next) => {
  const message = err.message || "Internal Server Error";
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
app.listen(8000, () => {
  console.log(`Server is running on PORT 8000`);
});
