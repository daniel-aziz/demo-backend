const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')

// Server port
const PORT = 5000;
const DATABASE_URL = 'mongodb://localhost/demoDatabase';

// Connect to DB
mongoose.connect(DATABASE_URL ,{ useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error)
})
db.on('open', () => {
    console.log('Connected to the DB')
})

// Setup the data
require('./util/fillData')

// Allow CORS
app.use(cors());

// Alow to server use json
app.use(express.json())

// Set up routes
// patients
const patientRouter = require('./routes/patientRouts')
app.use('/api/patient', patientRouter)
// data
const datasRouter = require('./routes/datasRouts')
app.use('/api/datas', datasRouter)

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}...`)
})


