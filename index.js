const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const pug = require('pug');
const env = require('dotenv');

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index.pug');
});

app.listen(() => {
  console.log('Listening on port', PORT);
});