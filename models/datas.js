const mongoose = require('mongoose')

// demo data schema
const datasSchema = new mongoose.Schema({
    genders: [],
    languages: [],
    surgeries: [],
})

module.exports = mongoose.model('datas', datasSchema)