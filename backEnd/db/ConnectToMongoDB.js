import mongoose from "mongoose";
import dotenv from "dotenv"; // Install this package (npm install dotenv --save--dev)

dotenv.config();
const mongoDB_URL = process.env.MONGO_DB_URI;
// const mongoDB_URL = Enter Your mongodb atlas url;

mongoose.connect(mongoDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to mongoDB");
});
db.on("error", (error) => {
  console.log("MongoDB connection error", error.message);
});
db.on("disconnected", () => {
  console.log("Disconnected to mongoDB");
});

export default db;
