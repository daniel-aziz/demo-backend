const express = require('express')
const router = express.Router();
const AppData = require('../models/datas')

// getting all demo data
router.get('/', async (req, res) => {
    try {
        const datas = await AppData.find()
        res.status(200).json(datas)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

module.exports = router;