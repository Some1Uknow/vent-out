import mongoose, { Schema } from "mongoose";

const userProfile = new Schema({
    bio:{
        type: String,
        required: true,
      },
      age:{
        type: Number,
        required: true,
      },
      gender:{
        type: String,
        required: true,
      },
      country:{
        type: String,
        required: true,
      },
});