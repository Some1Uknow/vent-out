import mongoose from "mongoose";
const { Schema, models } = mongoose;

const psychologistSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    expertise: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    years: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const psychologist =
  models.psychologist || mongoose.model("Psychologist", psychologistSchema);
export default psychologist;
