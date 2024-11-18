import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.models.Hostels ||
  mongoose.model("Hostels", hostelSchema);
