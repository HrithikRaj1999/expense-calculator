import express from "express";
import startServer from "./Apollo";

const app = express();
const port = process.env.SERVER_PORT ?? 8000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

startServer().catch((error) => {
  console.error("Error starting the server:", error);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
