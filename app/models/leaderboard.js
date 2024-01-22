const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  // Timestamps or additional ranking information can be added as needed.
});

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

module.exports = Leaderboard;
