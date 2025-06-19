import "dotenv/config";
import express from "express";
import { toNodeHandler } from "better-auth/node";

import { auth } from "./lib/auth";

const app = express();

app.get("/", (_req, res) => {
  res.json("Server is up and running!");
});

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.listen(6969, () => {
  console.log("Server is running on port 6969");
});
