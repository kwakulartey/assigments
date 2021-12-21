
import { UserSchema } from "../model/user.js";

// create student
const createUser =async(req,res) => {
    try {
        const newUser =await UserSchema.create({...req.body})
       return res.status(201).json({
            status: true,
            message:"User had been created",
            data: newUser})
        
    } catch (error) {
        console.log('Something went wrong', error)
    }
}

// get all users
const getallUsers = async(req,res)=>{
    try {
        const user =await UserSchema .find({});
        res.status(200).json({
            status: true,
            message:"Users fetched successfully",
            body: user
        })
        
    } catch (error) {
        console.log('Something went wrong',error);
        
    }
}

export {
    getallUsers,
    createUser
}