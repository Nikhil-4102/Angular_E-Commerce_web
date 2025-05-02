const express = require("express");
const mongoose = require("mongoose"); // Importing mongoose for MongoDB connection
const app = express();
const port = 3000; // Port number
const cors = require("cors"); // Importing CORS for cross-origin requests
const categoryRoutes = require("./routes/category"); // Importing category routes
const brandRoutes = require("./routes/brand");

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json()); 


app.get("/", (req, res) => {
  res.send("Hello World!"); // Response to the root URL
});

app.use("/category",categoryRoutes);
app.use("/brand",brandRoutes);

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
