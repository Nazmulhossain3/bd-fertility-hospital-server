const express = require('express');
const { createUser, logInUser, getAllUser } = require('./userController');
const router = express.Router()

router.post('/createUser', createUser)
router.post('/login',logInUser)
router.get('/getAllUser', getAllUser)

module.exports = router