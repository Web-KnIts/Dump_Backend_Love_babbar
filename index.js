// Creating app variable through express :

/* =================================================================== */
require("dotenv").config();
const app = require("express")()
const PORT = process.env.PORT
const bodyParser = require('body-parser')
const {dbConnect} = require('./Database')
/* ==================================================================== */

// middle Ware : bodyParser (PUT OR POST Case Exclusive)
// we are telling app to parse Json data and pass it to request.body object
app.use(bodyParser.json());

/* ======================================================================== */


// Roouting :
/* =================================================================================================== */

// get : fetch data   At "/" shows Hello World
app.get("/",(req,res)=>{
    res.send("Hello World !")
})


// post : send data to body & perfom some processes
app.post("/name",(req,res)=>{ 
    const {name} = req.body
    console.log(`${name}`)
    res.send("Name received")
})

/* =================================================================================================== */

// Running server :-
app.listen(PORT,()=>{
    console.log("Server Started at Port : ",PORT)
})

/* =================================================================================================== */

// Data Base Connection :
dbConnect();
