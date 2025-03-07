// stpe 3 create schema and export it inorder to generate model

const mongoose = require("mongoose")


// Schema means to do app mein kya kya aur kis type ka data hoga !
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:30
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
)

module.exports = mongoose.model("Todo",todoSchema);