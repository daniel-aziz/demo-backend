const express = require('express')
const router = express.Router();
const Patient = require('../models/patient')

// getting all patients
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find()
        res.status(200).json(patients)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// getting one patient
router.get('/:id', getPatient, async (req, res) => {
    res.status(200).json(res.patient);
})

// add one patient
router.post('/', async (req, res) => {
    const patient = new Patient({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        language: req.body.language,
        surgery: req.body.surgery,
    })
    try {
        const newPatient = await patient.save()
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// update one patient
router.patch('/', getPatient, async (req, res) => {
    try {
        const updatedPatient = await res.patient.save();
        res.status(201).json(updatedPatient)  
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// delete one patient
router.delete('/:id', getPatient, async (req, res) => {
    try {
        await res.patient.remove()
        res.status(200).json({ message: "Deleted succesfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// function for verifing patient by ID for CRUD oparations
async function getPatient(req, res, next) {
    let patient;
    try {
        patient = await Patient.findById(req.params.id)
        if (patient == null) return res.status(404).json({ message: `Cannot find the patient with this id: ${req.params.id}` })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.patient = patient;
    next();
}


module.exports = router;