const express = require('express')
const router = express.Router();

const {login,signup} = require('../controller/Auth')
const {auth,isStudent,isAdmin} = require('../middlerwares/authMiddle')

// public Routes :
router.post('/login',login)
router.post('/signup',signup)


// privaye Routes :
router.get('/student',auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected routes for student"
    })
})
router.get('/admin',auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected routes for Admin"
    })
})

module.exports = router