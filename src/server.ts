import express from "express";
// import Config from "./config";
// import { connectDB, pingDB } from "./utils/db";

// Link Routes
import chat from "./routes/chat.js";

//(async () => connectDB())();

// Startup Express and Connect MongoDB
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from Apillm!");
});

// Use Routes
app.use("/chat", chat);

// Health Check
// app.get("/health", async (req, res) => {
//   try {
//     await pingDB(); // Check database connection
//     return res.status(200).json({ status: "ok" });
//   } catch (err) {
//     return res.status(500).json({ status: "error" });
//   }
// });

export default app;
