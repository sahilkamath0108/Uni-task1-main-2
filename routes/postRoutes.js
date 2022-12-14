const express = require("express");

const postC = require("../controllers/postC");

const router1 = express.Router();
const auth = require("../middleware/auth");


//view my posts

router1.get("/myposts", auth.authToken, postC.myPosts);

//view all posts sorted

router1.get("/",postC.allPosts);

//creating a new post

// router1.post("/new", auth.authToken, auth.fileVerifyPost.fields([{name: 'file1'}, {name: 'file2'}, {name: 'file3'}, {name: 'file4'}]), postC.newPost);
router1.post("/new", auth.authToken, auth.fileVerifyPost.array('files',4), postC.newPost);

//delete a post

router1.delete("/delete/:id", auth.authToken, auth.authorizePost ,postC.deletePost);

//update a post

router1.put("/update/:id", auth.authToken, auth.authorizePost ,postC.updatePost);

//like a post

router1.post("/like/:id", auth.authToken , postC.likePost);

//Dislike a post

router1.post("/dislike/:id", auth.authToken , postC.dislikePost);

//comment on a post

router1.post("/comment/:id", auth.authToken , postC.commentPost);

//delete a comment

router1.post("/comment/:postID/:commentID", auth.authToken, postC.deleteComment);

module.exports= router1 