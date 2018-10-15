let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'src')));

let gameRouter = require('./gameRouter.js');
app.use('/', gameRouter);

module.exports = app;
