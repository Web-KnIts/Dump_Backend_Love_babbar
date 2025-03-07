const Like = require('../models/likeModel')
const Post = require('../models/postModel')


exports.createLike = async(req,res)=>{
    try{

        const {post,user} = req.body;
        const like = new Like({
            post,user
        })
        const saveLike = await like.save();

        const updatedLike = await Post.findByIdAndUpdate(post,{
            $push:{
                like:saveLike._id
            }
        },{new:true}).populate('like').exec() 

        res.status(200).json({
            success:true,
            post:updatedLike,
            message:"Likeded and Post is Updated"
        })
    }catch(err)
    {
        console.log("Not able to add like on post due to :"+ err.message)
        res.status(500).json({
            status:false,
            message:"Not able to like post "
        })
    }
}
exports.unlikePost = async(req,res) =>{
    try{
        const {post,like} = req.body
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like})
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{like:deletedLike._id}},{new:true})

        res.status(200).json({
            post:updatedPost
        })
    }
    catch(err)
    {
        console.log("Not able to unlike post due to :"+ err.message)
        res.status(500).json({
            status:false,
            message:"Not able to unlike post "
        })
    }
}