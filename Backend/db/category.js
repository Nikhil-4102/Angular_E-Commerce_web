const mongoose = require("mongoose");

const categoryScheama = new mongoose.Schema({
  name: String,
});

const Category = mongoose.model("categories", categoryScheama);

module.exports = Category; // Export the User model for use in other files
