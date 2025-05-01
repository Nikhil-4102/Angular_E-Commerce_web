const express = require("express");
const mongoose = require("mongoose"); // Importing mongoose for MongoDB connection
const app = express();
const port = 3000; // Port number
const categoryRoutes = require("./routes/category"); // Importing category routes

app.use(express.json()); // Middleware to parse JSON requests

app.get("/", (req, res) => {
  res.send("Hello World!"); // Response to the root URL
});

app.use("/category",categoryRoutes);

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "Angular_E-Commerce_App",
  });
    console.log("Connected to MongoDB"); // Log message on successful connection
}
connectDb().catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
