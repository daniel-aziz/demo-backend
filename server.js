require('dotenv').config()

const express = require('express')
const app = express();
const mongoose = require('mongoose')

// Server port
const PORT = 5000;

// connect to db
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error)
})
db.on('open', () => {
    console.log('Connected to the DB')
})

// alow to server use json
app.use(express.json())

// set up app routes
const patientRouter = require('./routes/patientRouts')
app.use('/api/patient', patientRouter)

// CORS middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "Origin, X-Requsted-With, Content-Type, Accept, Authoriztion");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({})
    }
    next();
})

// start server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}...`)
})

