require('dotenv').config();
const jwt = require('jsonwebtoken')

exports.auth=(req,res,next)=>{
    try {
        // extract jwt token :
        const token = req.body.token || req.cokkies.token
        if(!token)
        {
            return res.status(401).json({
                success:false,
                message:"Token missing"
            })
        }

        // verify token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode)
            req.user = decode
        }catch(err)
        {
            return res.status(401).json({
                succes:false,
                message:"Token invalid"
            })
        }
        next();

    } 
    catch (err) {
        return res.status(401).json({
            success:false,
            message:"Something went wrong while verifying token"
        })
    }
}
exports.isStudent=(req,res,next)=>{
    try{
        if(req.user.role !== "Student")
        {
            return res.status(401).json({
                success:false,
                message:'This is protected route for Student'
            })
        }
        next()
    }
    catch(err)
    {
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified"
        })
    }
}

exports.isAdmin=(req,res,next)=>{
    try{
        if(req.user.role !== "Admin")
        {
            return res.status(401).json({
                success:false,
                message:'This is protected route for Admin'
            })
        }
        next()
    }
    catch(err)
    {
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified"
        })
    }
}