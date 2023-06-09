const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  description: {
    type: String,
    default: "",
  },
  likes: {
    type: Array,
    default: [],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    detault: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
