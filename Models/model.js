const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('model_name',Schema);