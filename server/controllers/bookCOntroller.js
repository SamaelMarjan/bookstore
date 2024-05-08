const bookModel = require("../models/bookModel");

// create book controller

exports.createBookController = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    //validations
    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: "Fillup all the fields",
      });
    }

    const newBook = await bookModel({ title, author, publishYear }).save();
    return res.status(200).send({
      success: true,
      message: "Book created successfully",
      newBook,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error in creating book",
      error,
    });
  }
};

// get all book controller

exports.getAllBooksController = async (req, res) => {
  try {
    const books = await bookModel.find({});
    return res.status(200).send({
      success: true,
      message: "All books",
      count: books.length,
      books,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error in getting all books",
      error,
    });
  }
};

// get single book with id controller

exports.getSingleBookController = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);
    return res.status(200).send({
      success: true,
      message: "Here is the book you were looking for",
      book,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error in getting single book",
      error,
    });
  }
};

// update book with id controller

exports.updateBookController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await bookModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Book updated successfully",
      updatedBook,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: true,
      message: "Something went wrong updating book",
      error,
    });
  }
};

// delete book with id controller

exports.deleteBookController = async (req, res) => {
  try {
    const { id } = req.params;
    await bookModel.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Something went wrong deleting book",
      error,
    });
  }
};
