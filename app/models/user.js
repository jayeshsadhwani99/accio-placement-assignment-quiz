const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  languagePreference: {
    type: String,
    required: true,
  },
  // Additional fields like dateJoined, etc., can be added as needed.
});

const User = mongoose.model("User", userSchema);

module.exports = User;
