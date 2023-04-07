const express = require("express");
const { isAuthenticatedUser } = require("../middleware/userAuth");
const {
  createComment,
  getAllComments,
} = require("../controller/commentController");

const router = express.Router();

router.route("/comment/:id").post(isAuthenticatedUser, createComment);
router.route("/comments/:id").get(isAuthenticatedUser, getAllComments);
module.exports = router;
