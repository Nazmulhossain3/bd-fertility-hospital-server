const express = require('express');
const { createAllDoctors, getAllDoctors2, getSingleDoctorById } = require('./allDoctors.controller');
const router = express.Router()

router.post('/createAllDoctors', createAllDoctors )
router.get('/getAllDoctors2', getAllDoctors2)
router.get('/getSingleDoctorById/:id', getSingleDoctorById )



module.exports = router