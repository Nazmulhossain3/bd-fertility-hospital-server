const express = require('express');
const { createAppointment, getAllAppointment, getAppointmentByEmail } = require('./appoinment.controller');

const router = express.Router()

router.post('/createAppointment', createAppointment)
router.get('/getAllAppointment', getAllAppointment )
router.get('/getAllAppointment/:email', getAppointmentByEmail )



module.exports = router