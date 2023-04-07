const express = require("express");

const { isAuthenticatedUser } = require("../middleware/userAuth");
const {
  createPost,
  getAllPost,
  getSinglePost,
  getMyPost,
  editMyPost,
  deleteMyPost,
  likePost,
} = require("../controller/postController");
const router = express.Router();

router.route("/post/create").post(isAuthenticatedUser, createPost);
router.route("/posts").get(isAuthenticatedUser, getAllPost);
router.route("/post/:id").get(isAuthenticatedUser, getSinglePost);
router.route("/post/like/:id").get(isAuthenticatedUser, likePost);
router.route("/my/posts").get(isAuthenticatedUser, getMyPost);
router.route("/my/post/edit/:id").put(isAuthenticatedUser, editMyPost);
router.route("/my/post/delete/:id").delete(isAuthenticatedUser, deleteMyPost);
module.exports = router;
