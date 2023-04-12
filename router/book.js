const express = require("express");
const router = express.Router();
const Book = require("../model/booksdata");
//const mycon = require("../controllers/book");
const {
  getAllbook,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

// router.get("/", mycon.getAllbook);
// router.post("/", mycon.createBook);
// router.get("/:title", mycon.getBook);
// router.patch("/:title", mycon.updateBook);
// router.delete("/:title", mycon.deleteBook);
router.route("/").get(getAllbook).post(createBook);
router.route("/:title").get(getBook).patch(updateBook).delete(deleteBook);

module.exports = router;
