const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedOn: {
    type: Date,
    required: true,
  },
});

const booksdata = mongoose.model("booksdata", booksSchema);
module.exports = booksdata;
