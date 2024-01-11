const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    doctor_name: String,
    patient_name: String,
    number: Number,
    email: String,
    status: String,
});


const Appointments = mongoose.model('Appointment', appointmentSchema )

module.exports = {
    Appointments
}