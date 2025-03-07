const Todo = require('../models/Todo')
exports.deleteTodo = async(req,res) =>{
    try{
        const id = req.params.id;
        const deleteTodo = await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            data:deleteTodo,
            message:"Above Data Deleteds"
        })
    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            data:"internal issue ",
            message:"could not delete Data ... Try again "  
        })
    }
}