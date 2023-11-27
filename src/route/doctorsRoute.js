const express = require('express');
const { createDoctor, getAllDoctors } = require('../controller/doctorsController');

const router = express.Router()

router.post('/create', createDoctor)
router.get('/getAllDoctors', getAllDoctors)


module.exports = router
 