const express = require("express");
const { createPost, deletePost, getPostOfFollowing, updateCaption, commentOnPost, deleteComments } = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");
const { likeAndUnlikePost } = require("../controllers/post");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated,createPost);

router.route("/post/:id").get(isAuthenticated,likeAndUnlikePost).delete(isAuthenticated, deletePost)
.put(isAuthenticated,updateCaption);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

router.route("/post/comment/:id").put(isAuthenticated, commentOnPost).delete(isAuthenticated, deleteComments);

module.exports = router;