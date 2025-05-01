const mongoose = require("mongoose");
const Category = require("./category");

const productScheama = new mongoose.Schema({
  name: String,
  shortDescription: String,
  description: String,
  purchasePrice: Number,
  sellingPrice: Number,
  images: Array(string),
  categoryID:{type: Schema.Types.ObjectId, ref: 'categories'}, // Reference to the Category model
});

const Product = mongoose.model("products", productScheama);

module.exports = Product; // Export the User model for use in other files
