const mongoose = require("mongoose");

const orderScheama = new mongoose.Schema({
  date: Date,
  items:Array(any),
  status:Number,
});

const Order = mongoose.model("orders", orderScheama);

module.exports = Order; // Export the User model for use in other files
