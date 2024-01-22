const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 1,
  },
  totalScore: {
    type: Number,
    default: 0,
  },
  completedExercises: {
    type: Number,
    default: 0,
  },
  // Additional fields for detailed tracking can be added as needed.
});

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;
