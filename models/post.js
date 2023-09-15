import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: [true, "Post is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
