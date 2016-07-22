const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const dburi = 'mongodb://localhost/bookAPI';
mongoose.connect(dburi, (err) => { if (err) console.log(err); });

const bodyParser = require('body-parser');

const bookRouter = require('./src/routes/bookroutes');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('json spaces', 1);
app.use('/api/books', bookRouter);

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(`Book API is running on port ${port}`));
