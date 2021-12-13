const mongoose = require('mongoose')

// patient schema
const patientsSchema = new mongoose.Schema({
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