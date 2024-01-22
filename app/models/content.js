const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  difficultyLevel: {
    type: Number,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  exerciseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
    required: true,
  },
  // Additional fields for storing hints, multimedia links, etc., can be added.
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
