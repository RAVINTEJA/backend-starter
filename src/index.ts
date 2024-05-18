import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import usersRoutes from "./routes/usersRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}/api`);
});