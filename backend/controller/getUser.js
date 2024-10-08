const User = require("../models/User");


exports.getUser = async(req,res)=>{
    try{
        const userData = await User.find({});
        res.json({
            success:true,
            message:"User Details",
            data:userData
        })
    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message,
            
        })
    }
}