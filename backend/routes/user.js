const express = require("express");
<<<<<<< HEAD

const { register, login, followUsers, logout, updatePassword, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers, ForgotPasword, resetPassword } = require("../controllers/user");


const { isAuthenticated } = require("../middleware/auth");


const router = express.Router();

=======
const { register, login, followUser, logout, updatePassword, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers, forgotPassword, resetPassword } = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();


>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
router.route("/register").post(register);

router.route("/login").post(login);

<<<<<<< HEAD
router.route("/logout").get(logout);

router.route("/follow/:id").get(isAuthenticated, followUsers);

router.route("/update/password").put(isAuthenticated, updatePassword);
=======
router.route("/follow/:id").get(isAuthenticated, followUser);

router.route("/logout").get(logout);

router.route("/update/password").put(isAuthenticated,updatePassword);
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689

router.route("/update/profile").put(isAuthenticated, updateProfile);

router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);

router.route("/me").get(isAuthenticated, myProfile);

router.route("/user/:id").get(isAuthenticated, getUserProfile);

router.route("/users").get(isAuthenticated, getAllUsers);

<<<<<<< HEAD
router.route("/forgot/password").post(ForgotPasword);
=======
router.route("/forgot/password").post(forgotPassword);
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689

router.route("/password/reset/:token").put(resetPassword);

module.exports = router;