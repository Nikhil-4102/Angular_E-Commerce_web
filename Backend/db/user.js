const mongoose = require('mongoose');

const userScheama = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin:Boolean
});

const User = mongoose.model('users', userScheama);

module.exports = User; // Export the User model for use in other files
