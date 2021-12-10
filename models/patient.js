const mongoose = require('mongoose')
const {Schema} = mongoose;

const patientsSchema = new Schema({
    gender: String,
    age: Number,
    language: String,
    surgery: String
})