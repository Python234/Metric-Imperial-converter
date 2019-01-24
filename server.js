'use strict';

const express    = require('express');
const cors       = require('cors');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const routes     = require('./app/routes.js');
const converter = require('./app/converter.js');

const app = express();

app.set('view engine', 'pug');

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app, converter);

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port ' + process.env.PORT);
});