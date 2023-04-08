const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const app = express();

const ShowsData = require('./modules/dataParse');

app.engine('ejs', engine);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.post('/search', ShowsData);

app.get('/', (req, res) => {
  res.render('layout/index');
});

app.listen(8080, () => {
  console.log('APP OPEN');
});
