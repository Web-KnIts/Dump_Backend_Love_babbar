// step 5 Import model of Todo inorder to createTodo data using schemas

const Todo = require("../models/Todo")


// Define Route Handler :

exports.createTodo = async(req,res)=>{
    try{

        // extarct the data from request body
        const {title,description} = req.body;

        // create a new Todo obj and insert in Db 
        const response = await Todo.create({title,description})

        // send a json res with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created Successfully'
            }
        )
    }
    catch(err)
    {
        console.error(err);
        console.log(err)
        res.status(500).json(
            {
                success:false,
                data:"internals server error",
                message:err.message
            }
        )

    }
}