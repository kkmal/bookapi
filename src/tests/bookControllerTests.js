const sinon = require('sinon');
const should = require('should');

describe('Book Controller Tests', () => {
  describe('Post', () => it('should not allow an empty title on Post', () => {
    const Book = (book) => { this.save() = () => {}};

    const req = {
      body: {
        author: 'Kamal'
      }
    };

    const res = {
      status: sinon.spy(),
      send: sinon.spy()
    };

    const bookController = require('../controllers/bookController')();
    bookController.posts(req, res);
    res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0]);
    res.send('Title is Required');
  }));
});

