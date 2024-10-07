import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import personRouter from "./api/routes/person-router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/person', personRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});