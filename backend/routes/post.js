const express = require("express");
<<<<<<< HEAD
const { createPost, likeAndUnlikePost, deletePost, getPostOfFollowing, updateCaption, commentOnPost, deleteComment } = require("../controllers/post");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);

router.route("/post/:id").get(isAuthenticated, likeAndUnlikePost)
.put(isAuthenticated, updateCaption)
.delete(isAuthenticated, deletePost);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

router.route("/post/comment/:id").put(isAuthenticated, commentOnPost).delete(isAuthenticated, deleteComment);
=======
const { createPost, deletePost, getPostOfFollowing, updateCaption, commentOnPost, deleteComments } = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");
const { likeAndUnlikePost } = require("../controllers/post");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated,createPost);

router.route("/post/:id").get(isAuthenticated,likeAndUnlikePost).delete(isAuthenticated, deletePost)
.put(isAuthenticated,updateCaption);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

router.route("/post/comment/:id").put(isAuthenticated, commentOnPost).delete(isAuthenticated, deleteComments);
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689

module.exports = router;