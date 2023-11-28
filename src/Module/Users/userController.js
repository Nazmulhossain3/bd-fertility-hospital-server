const { Users } = require("./userModel")

const createUser = async(req,res)=>{

    try {
        const newUser = await Users(req.body)
        await newUser.save()
        res.status(200).json({
            message : "Users is created successfully"
        })
    } catch (error) {
        res.status(500).json({
            error : "there was a server side error"
        })
    }
} 

const logInUser = async(req,res)=> {
    try {
        const {email, password} = req.body
        const user = await Users.findOne({email : email})
        if(user){
            if(user.password === password){
                res.json('success')
            } else{
                res.json('the password is incorrect')
            }
        } else{
            res.json('Account not registered')
        }

     

    } catch (error) {
       res.status(500).json({
        error,
       })
    }
}

const getAllUser = async(req,res)=> {
    try {
        const result = await Users.find()
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
    createUser,
    logInUser,
    getAllUser
}