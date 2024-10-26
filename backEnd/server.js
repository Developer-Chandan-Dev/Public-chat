import express from "express";
import path from "path";
import dotenv from "dotenv"; // Install this package (npm install dotenv --save--dev)
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import db from "./db/ConnectToMongoDB.js";
import { app, server } from "./socket/socket.js";

app.use(bodyParser.json()); // To parse incoming request in JSON payloads (from req.body)
app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3000/", "https://chattervibe.netlify.app","https://public-chat-ucdd.onrender.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// const __dirname = path.resolve();



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
