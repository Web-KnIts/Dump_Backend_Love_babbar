/* ============================================================================================= */
// mongoose Access :
const mongoose = require('mongoose')

/* ============================================================================================= */

// DataBase Name : if Db not exist (mongo creates it )
const Db_name = "Profiles"

/* ============================================================================================= */

// Connecting Monogoose with mongoDb
// Returns a promise;
// mongoose.connect(`mongodb://localhost:27017/${Db_name}`,{
//     userNewurlParser:true,
//     useUnifiedTopology:true,
// })

const dbConnect = () =>{
    mongoose.connect(`mongodb://localhost:27017/${Db_name}`)
    .then(()=>{console.log("Database Connected Successfully ")})
    .catch(err => console.log("Error occures while connecting to Db : ",err))
}


/* ============================================================================================= */

module.exports = {dbConnect}