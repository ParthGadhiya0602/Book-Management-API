import { Book } from "../models/book.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve books" });
  }
};

export const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (book) {
      return res.status(200).json(book);
    }
    res.status(404).json({ error: "Book not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the book" });
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = new Book({ title, author, summary });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: "Failed to add the book" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { title, author, summary } = req.body;
    console.log(req);
    const updatedBook = await Book.findOneAndUpdate(
      { _id: bookId },
      { title, author, summary },
      { new: true }
    );
    if (updatedBook) {
      return res.status(200).json(updatedBook);
    }
    res.status(404).json({ error: "Book not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update the book" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findOneAndDelete({ _id: bookId });
    if (deletedBook) {
      return res.status(200).json(deletedBook);
    }
    res.status(404).json({ error: "Book not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the book" });
  }
};
