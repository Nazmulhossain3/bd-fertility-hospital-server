const { Appointments } = require("./appointment.model")


const createAppointment = async(req,res) =>{
    try {
        const newAppointment = new Appointments(req.body)
        const result = await newAppointment.save()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
                error
        })
    }
}


const getAllAppointment = async(req,res)=> {
    try {
        const result = await Appointments.find()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
    })
    }

}


const getAppointmentByEmail = async(req,res)=> {
    try {
        const {email} = req.params 
        const result = await Appointments.find({email})
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
    })
    }
}


module.exports = {
    createAppointment,
    getAllAppointment,
    getAppointmentByEmail
}