const Book = require("../model/booksdata");

const getAllbook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findOne({ title: req.params.title });
    if (!book) {
      return res.status(404).json({
        message: `Book with a title ${req.params.title} is not found`,
      });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  //console.log(req.body);
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  //console.log(req.body);
  try {
    const book = await Book.findOneAndUpdate(
      { title: req.params.title },
      req.body,
      { new: true }
    );
    if (!book) {
      return res.status(404).json({
        message: `Book with a titile ${req.params.title} is not found`,
      });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.deleteOne({ title: req.params.title });
    if (!book) {
      return res.status(404).json({
        message: `Book with a title ${req.params.title} is not found`,
      });
    }
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllbook, getBook, createBook, updateBook, deleteBook };
