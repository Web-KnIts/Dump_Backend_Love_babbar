const Post = require('../models/postModel');
const Like = require('../models/likeModel');
const Comment = require('../models/commentModel')

exports.createPost  = async(req,res)=>{
    try{
      const {title,body} = req.body
      const post = new Post({
        title,body
      })  
      const savePost = await post.save()

      res.status(200).json({
        success:true,
        post:savePost,
        message:"Post posted Successfully"
      })
    }
    catch(err){
      
        return res.status(400).json({
            error:"Error while creating post "
        })
    }
}
exports.getAllPost = async(req,res)=>{
  try{

    // returns all the data & id for respective schemas (await find({}))
    const getPost = await Post.find({}).populate("like").populate('comments').exec();
    res.json({
      success:true,
      post:getPost,
    })
  }
  catch(err)
  {
    return res.status(400).json({
      error:"Error while fetching post "
  })
  }
}