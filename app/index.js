import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/language_game", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
