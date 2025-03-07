const Todo = require('../models/Todo')

// define route handler for updating existing Todo

exports.updateTodo = async(req,res)=>{
    try{
        const id = req.params.id;
        const {title,description} = req.body;
        const updateTodo = await Todo.findByIdAndUpdate({_id:id},
        {
            title:title,
            description:description,
            updatedAt:Date.now(),
        })
        res.status(200).json({
            success:true,
            data:updateTodo,
            message:"Specific Data for Id is been Updated"
        })
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message
        })
    }
}