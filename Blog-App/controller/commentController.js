const Comment = require('../models/commentModel')
const Post = require('../models/postModel')

exports.createComment = async(req,res)=>{
    try{
    /*(New method for saving data into Db )*/

        // fetching data from post req.
        const {post,user,body} = req.body
        // creating comment obj 
        const comment = new Comment({
            post,user,body
        })
        // saved & add comment into Db
        const saveComment = await comment.save()

        // find post & add comment into post's comment array :
        const updatedPost = await Post.findByIdAndUpdate( post ,{
            // used for updating entry :
            $push:{
                comments:saveComment._id
            }},
            // return me the updated document :
            {
                new:true
            }
        ).populate("comments").exec() // expand comment array ny replacing id's with data

        res.status(200).json({
            success:true,
            post:updatedPost
        })
    }
    catch(err)
    {
        console.log("Error caught while commenting : ",err)
        console.log(err.message)
        res.status(500).json({
            success:false,
            data:"internal server issue",
            message:"error occured while creating comment"
        })
    }
}

exports.deleteComment = async(req,res)=>{
    try{
        const {post,comment} = req.body
        const deleteComment = await Comment.findOneAndDelete({post:post,_id:comment})
        const updatePost = await Post.findByIdAndUpdate(post,{$pull:{comments:deleteComment._id}},{new:true})

        res.status(200).json({
            success:true,
            post:updatePost,
            message:"Deleted comment & updated Post"
        })

    }catch(err)
    {
        console.log(err)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}