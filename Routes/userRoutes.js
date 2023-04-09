const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserProfile,
  updateProfile,
  updatePassword,
  getUserById,
} = require("../controller/UserController");
const { isAuthenticatedUser } = require("../middleware/userAuth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/user/:id").get(getUserById);
router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

module.exports = router;
