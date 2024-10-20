import express from "express";
import path from "path";
import dotenv from "dotenv"; // Install this package (npm install dotenv --save--dev)
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

app.use(
  cors({
    origin: ["http://localhost:3000/", "http://localhost:3000", "https://chattervibe.netlify.app"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import db from "./db/ConnectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

// const __dirname = path.resolve();

app.use(bodyParser.json()); // To parse incoming request in JSON payloads (from req.body)
app.use(cookieParser());

// Routes
app.get("/", async (req, res) => {
  res.send("Home Page");
});
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "../FrontEnd/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../FrontEnd", "dist", "index.html"));
// });

server.listen(PORT, () => {
  console.log("Server is listening on port with socket", PORT);
});
