import mongoose from "mongoose";
const { Schema, models } = mongoose;

const postSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

const Post = models.Post || mongoose.model("Post", postSchema);
postSchema.add({
  userImage: {
    type: String,
    required: true,
  },
})
export default Post;
