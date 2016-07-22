const Book = require('../models/bookModel');

const bookController = () => {
  const post = (req, res) => {
    const book = new Book(req.body);
    if (!req.body.title) {
      res.status(400);
      res.send('Title is required');
    } else {
      book.save((err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).send(book);
        }
      });
    }
  };

  const get = (req, res) => {
    const query = {};

    if (req.query.genre) {
      query.genre = req.query.genre;
    }

    Book.find(query, (err, books) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(books);
      }
    });
  };

  return {
    gets: get,
    posts: post,
  };
};

module.exports = bookController;
