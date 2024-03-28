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
      type: String,
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
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Psychologist =
  mongoose.models.psychologist || mongoose.model('psychologist', psychologistSchema);
export default Psychologist;
