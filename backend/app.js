import express, { json } from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import errorMiddleware from "./middleware/error";

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
///
app.use(json());
app.use(cookieParser());
app.use(cors());
//Routes Import

import product from "./routes/productRoute";
import user from "./routes/userRoute";
import order from "./routes/orderRoute";

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//MiddleWare For Errors
app.use(errorMiddleware);

export default app;
