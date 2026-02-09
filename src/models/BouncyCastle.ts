import { Schema, models, model } from "mongoose";

const BouncyCastleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: String,
      required: true,
    },
    ageRange: {
      type: String,
      required: true,
    },
    pricePerDay: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent model overwrite in Next.js dev mode
const BouncyCastle =
  models.BouncyCastle || model("BouncyCastle", BouncyCastleSchema);

export default BouncyCastle;
