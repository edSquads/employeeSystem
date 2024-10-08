const User=require("../models/User");


exports.createUser=async(req,resp)=>
{
    try
    {
        const {name,email,title,department,role}=req.body;
        if(!name || !email || !title || !department || !role)
        {
            return resp.status(400).json({
                success:false,
                message:'PLS ENTER ALL DETAILS'
            })
        }
        const user=await User.create({
            name,
            email,
            title,
            department,
            role,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`
        })
        return resp.status(200).json({
            success:true,
            message:'USER CREATED',
            data:user,
        })
    }
    catch(err)
    {
       resp.status(500).json({
        success:false,
        message:err.message,
       })
   }
}

