const mongoose = require('mongoose');

const AnimalSchema = mongoose.Schema({
    animalName: {
        type: String,
        required: true
    },
    animalID: {
        type: Number,
        required: true
    },
    eatsID: {
        type: Array,
        required: false
    }
});

const Animal = module.exports = mongoose.model('Item', AnimalSchema)