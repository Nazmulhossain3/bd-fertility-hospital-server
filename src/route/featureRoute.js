const express = require('express');
const { createFeatures, getAllFeatures } = require('../controller/featuresController');
const router = express.Router();

router.post('/create', createFeatures);
router.get('/getAllFeatures', getAllFeatures)

module.exports = router;
