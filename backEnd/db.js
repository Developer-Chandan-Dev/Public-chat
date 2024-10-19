const mongoose = require("mongoose");

// Define the mongoDB collection URL

const mongoURL = "mongodb://localhost:27017/notes";

// Setup mongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
// Mongoose maintains a default connection object representing the mongoDB connection

const db = mongoose.connection;

// Using db we will establish bridge between NodeJS and mongoDB.
// Define event listners for database connection
db.on("connected", () => {
  console.log("Connected to mongoDB server.");
});
db.on("error", (err) => {
  console.log("MongoDB connection error : ", err);
});
db.on("disconnected", () => {
  console.log("Disconnected to mongoDB server.");
});

// Export the database connection
module.exports = db; // db is representing mongoDB connection
