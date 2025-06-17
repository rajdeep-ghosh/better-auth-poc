import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json("Server is up and running!");
});

app.listen(6969, () => {
  console.log("Server is running on port 6969");
});
