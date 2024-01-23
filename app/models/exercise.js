const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  language: String,
  startTime: {
    type: Date,
    default: Date.now,
  },
  endTime: Date,
  score: Number,
  // Additional fields can be added to enrich the session data.
});

const Exercise = mongoose.model("Session", exerciseSchema);

module.exports = Session;
