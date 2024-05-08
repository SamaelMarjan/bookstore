const router = require("express").Router();
const {
  createBookController,
  getAllBooksController,
  getSingleBookController,
  updateBookController,
  deleteBookController,
} = require("../controllers/bookCOntroller");

// routes
// create book || POST
router.post("/createbooks", createBookController);

// get all books || GET
router.get("/getall-books", getAllBooksController);

// get single book with id || GET
router.get("/:id", getSingleBookController);

// update book with id || PUT

router.put("/:id", updateBookController);

// delete book with id || DELETE

router.delete("/:id", deleteBookController);

module.exports = router;
