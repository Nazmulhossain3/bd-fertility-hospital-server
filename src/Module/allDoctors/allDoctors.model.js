const mongoose = require('mongoose');

const allDoctorsSchema = mongoose.Schema({
    name : String,
    image : String,
    location : String,
    number : String,

})

const allDoctors = mongoose.model('allDoctor', allDoctorsSchema)

module.exports = {
    allDoctors
}