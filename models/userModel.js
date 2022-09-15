const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    name: String,
    phoneNumber: Number,
    favouriteAds: [String]
})

var userModel = mongoose.model('users', user );

module.exports = userModel;

