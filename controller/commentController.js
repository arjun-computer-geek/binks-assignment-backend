const catchAsync = require("../middleware/catchAsync");
const Post = require("../modals/postModal");
const Comment = require("../modals/commentModal");
const ErrorHandler = require("../utils/errorHandler");
// create a comment => /api/v1/comment/POSTID
exports.createComment = catchAsync(async (req, res, next) => {
  const { description } = req.body;
  const post = Post.findById(req.params.id);
  if (!post) {
    return next(new ErrorHandler("Post Not found", 404));
  }

  const comment = await Comment.create({
    description,
    user: req.user._id,
    post: req.params.id,
  });
  res.status(200).json({
    success: true,
    comment,
  });
});

// get all comment of a post => /api/v1/comments/POSTID
exports.getAllComments = catchAsync(async (req, res, next) => {
  const comments = await Comment.find({ post: req.params.id });
  res.status(200).json({
    success: true,
    comments,
  });
});
