import express from "express";
import startGraphqlServer from "./Apollo";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectDB";
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

(async function () {
  app.get("/", (req, res) => {
    res.send("Hello, This is Express server!");
  });

  await startGraphqlServer();
  await connectMongoDB();
  app.listen(port, () => {
    console.log(`Express Server is running on http://localhost:${port}`);
  });
})();
