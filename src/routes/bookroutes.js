const express = require('express');
const bookRouter = express.Router();
const Book = require('../models/bookModel');
const bookController = require('../controllers/bookController')();

bookRouter.route('/')
  .post(bookController.posts)
  .get(bookController.gets);

bookRouter.use('/:id', (req, res, next) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) {
      res.status(500).send(err);
    } else if (book) {
      req.book = book;
      next();
    } else {
      res.status(404).send('No Book found :(');
    }
  });
});

bookRouter.route('/:id')
  .delete((req, res) => req.book.remove((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send('Removed');
    }
  }))
  .patch((req, res) => {
    Object.keys(req.body).filter(x => x !== '_id').forEach(x => { req.book[x] = req.body[x]; });
    req.book.save((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(req.book);
      }
    });
  })
  .put((req, res) => {
    req.book.title = req.body.title;
    req.book.genre = req.body.genre;
    req.book.author = req.body.author;
    req.book.save();
    res.json(req.book);
  })
  .get((req, res) => {
    res.json(req.book);
  });

module.exports = bookRouter;
