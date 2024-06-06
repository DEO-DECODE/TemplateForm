import express from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import userRoute from "./routes/userRoutes.js";
const app = express();
// Cretes an instance of express application
dbConnection();
app.use(cors());
app.use(express.json());
// BACKEND SE INTERACTION JO BHI HOGA, WO JSON k form m hoga.
app.use("/api/v1/user", userRoute);
app.listen(8000, () => {
  console.log(`Server is running on PORT 8000`);
});
