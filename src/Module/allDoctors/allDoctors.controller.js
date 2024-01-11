const { allDoctors } = require("./allDoctors.model")


const createAllDoctors = async(req,res)=> {
    try {
        const newDoctors = new allDoctors(req.body)
        const result = await newDoctors.save()
        res.status(200).json({
            result
        })


    } catch (error) {
        res.status(500).json({
            error
        })
    }
}


const getAllDoctors2 = async(req,res)=> {
    try {
       
        const result = await allDoctors.find()
        res.status(200).json({
            result
        })

    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const getSingleDoctorById = async(req,res)=> {
  try {

    const {id} = req.params
    const result = await allDoctors.findById(id)
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
    createAllDoctors,
    getAllDoctors2,
    getSingleDoctorById
}