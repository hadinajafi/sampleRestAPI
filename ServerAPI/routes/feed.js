const express = require('express');
//feed controller
const feedController = require('../controller/feed');
//express router
const router = express.Router();

//GET feed/posts
router.get('/posts', feedController.getPosts);
//POST feed/post
router.post('/post', feedController.createPost);

module.exports = router;
