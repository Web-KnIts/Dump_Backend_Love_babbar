const express = require('express')
const router  = express.Router();


// import controller ;
const {getDummyPage} = require('../controller/getDummyPage')
const {createComment} = require('../controller/commentController')
const {createLike} = require("../controller/likeController")
const {createPost} = require("../controller/postController")
const {getAllPost} =  require('../controller/postController')
const {unlikePost} = require('../controller/likeController')
const {deleteComment} = require('../controller/commentController')
// define Routes
router.get('/dummyroute',getDummyPage)
router.post('/comments/create',createComment)
router.post('/likes/like',createLike)
router.post('/post/create',createPost)
router.get('/getallpost',getAllPost)
router.post('/likes/unlike',unlikePost)
router.post('/comments/delete',deleteComment)
// Export Router
module.exports = router;
