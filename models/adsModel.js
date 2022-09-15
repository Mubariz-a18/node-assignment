const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ads = new Schema({
    userId: String,
    adType: String
})

var adModel = mongoose.model('ads', ads );

module.exports = adModel;

