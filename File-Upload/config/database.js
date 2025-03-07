require('dotenv').config()
const mongoose = require('mongoose')

const connectDb = () =>{
     mongoose.connect(process.env.DATABASE_URL).then(
        ()=>console.log("Database Connected Successfully")
    )
    .catch((err)=>{
        console.log('Database failed to make connection , Try Again')
        console.error(err)
        console.log(err.message)
        process.exit(1)
    })
}

module.exports = connectDb
