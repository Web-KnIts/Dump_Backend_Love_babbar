// step 1 create express server
// step 4 import exported fun from database and call it to connect with Db

require('dotenv').config();
const  dbConnect = require('./config/Database')
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

// middleware to parse json request body
app.use(express.json()) 


// importing routes :
const todoroutes = require('./routes/todos')


// mount the todo ASPI routes (combines the api/v1 link with todoroutes link)
app.use('/api/v1',todoroutes);

// Default Route
app.get("/",(req,res)=>{
    res.send ("<h1>Home Page</h1>")   
})

// Server Staring point
app.listen(PORT,()=>{
     console.log("Server Started at Port : ",PORT)
})

// calling fun for Db connection
dbConnect();

