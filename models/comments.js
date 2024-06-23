import mongoose, { Schema, models } from "mongoose";

const commentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    postId: Schema.Types.ObjectId,
    userImage: String,
    content: String,
  },
  { timestamps: true }
);

const comments =
  models.comments || mongoose.model("comments", commentSchema);
export default comments;
