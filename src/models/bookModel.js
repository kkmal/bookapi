const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const bookModel = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('book', bookModel);
