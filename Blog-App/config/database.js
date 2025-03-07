require('dotenv').config();
const mongoose = require('mongoose')
const URL = process.env.DATABASE_URL

exports.connectDb = () =>{
    mongoose.connect(URL).then(
    ()=>console.log("Database Connected Successfully")
    )
    .catch(err =>{
        console.log("Error caught while connecting to Db : ",err)
        console.log(err.message)
        process.exit(1)
    })
}

exports.disConnectDb = () =>{
    mongoose.disconnect(URL).then(
        ()=>console.log("Database disconnected Successfully")
    ) .catch(err =>{
        console.log("Error caught while disconnecting to Db : ",err)
        console.log(err.message)
        process.exit(1)
    })
}
