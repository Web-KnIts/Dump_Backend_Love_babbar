const Todo = require("../models/Todo")

// define route handler

// Mutiple Todos
exports.getTodo = async(req,res)=>{
    try{
        // fetch all Todo items;
        const todos = await Todo.find({})

        // response :
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Data get Fetched ...."
        })
    }
    catch(err)
    {
        console.error(err);
        console.log(err.message)
        res.status(500).json({
            success:false,
            data:"internal server Error",
            message:err.message
        })

    }
}

// single Tod0s :
exports.singleTodo= async(req,res)=>{
    try{

        // extarct single item on the basis of Id
        const id = req.params.id;
        const getSingleTodo = await Todo.findById({_id:id})

        // if todo not found :
        if(!getSingleTodo)
        {
            return res.status(404).json({
                success:false,
                message:"No data found for given id"
            })
        }
        res.status(200).json({
            success:true,
            data:getSingleTodo,
            message:"specific Data for id get Fetched ...."
        })
    }
    catch(err)
    {
        console.log("Error caught : ",err)
        res.status(500).json({
            success:false,
            data :"internal server issue",
            message:err.message,
        })
    }
}