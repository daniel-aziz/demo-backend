const mongoose = require('mongoose')

const patientsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    language: {
        type: String,
        require: true,
    },
    surgery: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Patients', patientsSchema)