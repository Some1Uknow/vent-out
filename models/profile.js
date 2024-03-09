import mongoose, { Schema, model, models } from "mongoose";

const userProfileSchema = new Schema(
  {
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
