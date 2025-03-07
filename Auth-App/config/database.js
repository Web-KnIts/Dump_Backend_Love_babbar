require('dotenv').config();
const URL = process.env.DATABASE_URL
const mongoose = require('mongoose')

const connectDb = () =>{
    mongoose.connect(URL).then(
        ()=>console.log("Db connected successfully")
    ).catch((err)=>{
        console.log('Error occured while connecting to Db : ' +  err.message)
        console.error(err)
        console.trace(err)
        process.exit(1)
    })
}

module.exports = connectDb