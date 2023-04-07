const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  description: {
    type: String,
    default: "",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
