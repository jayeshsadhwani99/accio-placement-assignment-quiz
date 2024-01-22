const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: String, // e.g., 'EN' for English, 'ES' for Spanish
  // Additional fields for language specifics, like proficiency levels, can be added.
});

const Language = mongoose.model("Language", languageSchema);

module.exports = Language;
