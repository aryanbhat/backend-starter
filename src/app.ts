import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();
const app = express();
const server = createServer(app);

app.use(express.json());
app.use("/api", router);
export { app, server };
