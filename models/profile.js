import mongoose from "mongoose";
const { Schema, models } = mongoose;

const userProfileSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    bio: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const profileSchema = models.Profile || mongoose.model("Profile", userProfileSchema);
export default profileSchema;
