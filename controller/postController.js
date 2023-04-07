const catchAsync = require("../middleware/catchAsync");
const Post = require("../modals/postModal");
const ErrorHandler = require("../utils/errorHandler");
// Create a post => /api/v1/post/create
exports.createPost = catchAsync(async (req, res, next) => {
  const { description } = req.body;
  const post = await Post.create({
    description,
    user: req.user._id,
  });

  res.status(200).json({
    success: true,
    post,
  });
});

// get all post => /api/v1/posts
exports.getAllPost = catchAsync(async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json({
    success: true,
    posts,
  });
});

// Get single post => /api/v1/post/postId
exports.getSinglePost = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(new ErrorHandler("No post found with this ID", 404));
  }
  res.status(200).json({
    success: true,
    post,
  });
});

// Get user Posts => /api/v1/my/posts
exports.getMyPost = catchAsync(async (req, res, next) => {
  const posts = await Post.find({ user: req.user._id });
  if (!posts) {
    return next(new ErrorHandler("No Post found", 404));
  }
  res.status(200).json({
    success: true,
    posts,
  });
});

// Edit user Posts => /api/v1/my/post/edit/PostID
exports.editMyPost = catchAsync(async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(
    { user: req.user._id, _id: req.params.id },
    req.body
  );
  if (!post) {
    return next(new ErrorHandler("Post Not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Post Updated Successfully",
  });
});

// delete user Posts => /api/v1/my/post/delete/PostId
exports.deleteMyPost = catchAsync(async (req, res, next) => {
  const post = await Post.findByIdAndRemove(
    { user: req.user._id, _id: req.params.id },
    req.body
  );
  if (!post) {
    return next(new ErrorHandler("Post Not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Post deleted Successfully",
  });
});

// Like user Posts => /api/v1/my/post/like/postID
exports.likePost = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.user._id)) {
    await post.updateOne({ $push: { likes: req.user._id } });
    res.status(200).json({
      success: true,
      message: "Post Liked Successfully",
    });
  } else {
    await post.updateOne({ $pull: { likes: req.user._id } });
    res.status(200).json({
      success: true,
      message: "Post Disliked Successfully",
    });
  }
});
