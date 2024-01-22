const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
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

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
