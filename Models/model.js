const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('model_name',Schema);
