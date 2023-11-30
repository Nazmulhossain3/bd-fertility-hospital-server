

// here is Service Gallery related  functionality

const { ServiceGallery } = require("./galleryModel")


const createServiceGallery = async(req,res)=>{
    try {
        const addServiceGallery = new ServiceGallery(req.body)
        await addServiceGallery.save()
        res.status(200).json({
            message : "Succesfully added on Service Gallery"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}


module.exports = {
    createServiceGallery
}