const Book = require('../models/book');

exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll());
}

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.BookId));
}

exports.save = (req, res, next) => {
    console.log(req.body)
    const book = req.body;
    const savedBook = new Book(null, book.title, book.ISBN, book.publishedDate, book.author).save();
    res.status(201).json(savedBook);
}

exports.update = (req, res, next) => {
    const book = req.body;
    const updatedBook = new Book(req.params.BookId, book.title, book.ISBN, book.publishedDate, book.author).update();
    res.status(200).json(updatedBook);
}


exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.BookId);
    res.status(200).end();
}