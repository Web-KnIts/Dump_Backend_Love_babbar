// step 2 connect db with mongoose (create a seperate fun for connection)

require('dotenv').config();
const mongoose = require('mongoose');

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Database Connected Successfully ")})
    .catch(err => {
        console.log("Error occures while connecting to Db : ",err)
        process.exit(1)
})
}

module.exports = dbConnect;