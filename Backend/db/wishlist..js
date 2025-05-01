const mongoose = require("mongoose");

const wishListScheama = new mongoose.Schema({
    userID: {Type: Schema.Types.ObjectId, ref: 'users'}, 

    productsId:Array(String)
});

const Wishlist = mongoose.model("wishlists", wishListScheama);

module.exports = Wishlist; // Export the User model for use in other files
