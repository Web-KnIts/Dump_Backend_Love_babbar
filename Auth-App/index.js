require('dotenv').config()
const express = require('express');
const connectDb = require('./config/database');
const user = require('./routes/user')



const app = express();
const PORT = process.env.PORT || 5000



app.use(express.json())
app.use('/api/v1',user)




app.listen(PORT,()=>{
    console.log('App listened At Port : '+ PORT)
})


connectDb();
// const nodemailer = require('nodemailer');
// const password = "dqps slza rqkl aqxq"
// const email = "lakshayseth900@gmail.com"
// let transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//        user:email,
//        pass:password  
//     }
// })
// const mailOption = {
//     from:"Lakshay Seth <Test>",
//     to:"lakshayseth34t@gmail.com",
//     subject:"Test",
//     text:"Broo testing",
//     html: '<b>Hello world?</b>',
// }
// transporter.sendMail(mailOption,(err,info)=>{
//     if(err) {
//         return console.log('Error occurred: ' + err.message);
//     }
//     console.log('Message sent: %s', info.messageId);
// }) 