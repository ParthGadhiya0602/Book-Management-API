import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  summary: String,
});

export const Book = mongoose.model("Book", bookSchema);
