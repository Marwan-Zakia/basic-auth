'use strict';
const express = require('express');
require('dotenv').config();
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const userRouter= require('./routes/signup');
 const userRouterin = require('./routes/signin');

app.use(express.json());
const PORT = process.env.PORT || 3001;
app.use(userRouter);  
 app.use(userRouterin);
app.use('*', notFoundHandler);
app.use(errorHandler);
app.use(logger);



app.get('/', (req, res) => {
  res.status(200).send('everything is awesome ')

})






function start() {
  app.listen(PORT, () => {
    console.log(`the server starts at ${PORT}`);
  });
}


module.exports = {
  server: app,
  start: start
}