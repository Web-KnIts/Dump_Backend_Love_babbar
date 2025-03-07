require('dotenv').config()
const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const connectDb = require('./config/database')
const cloudinaryConnect = require('./config/cloudinary')
const router = require('./routes/route')

app.use(express.json())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/temp/'
}))
app.use('/api/v1',router)


app.listen(process.env.PORT || 5000,()=>{
    console.log(`server listened at port : ${process.env.PORT}`)
})


connectDb()
cloudinaryConnect()