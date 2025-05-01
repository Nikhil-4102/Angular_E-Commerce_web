const mongoose = require("mongoose");

const cartScheama = new mongoose.Schema({
 
    userID: { type: Schema.Types.ObjectId, ref: "users" },
    productsId: Array(String),
  
});

const Cart = mongoose.model("carts", cartScheama);

module.exports = Cart; // Export the User model for use in other files
