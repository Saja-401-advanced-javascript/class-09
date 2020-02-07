
/**
 * API Server Module
 * @module lib/server
 */



// 3rd party middleware
const express = require('express');
const morgan = require('morgan');

// custom middleware
const notFoundHandler = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');



// custom routes
const router = require('../routes/v1.js');

// app constsants
const app = express();



// parse from request body
app.use(express.json());
app.use(morgan('dev'));
app.use(router);
app.use('*', notFoundHandler);
app.use(errorHandler);




/**
 * Start Server on specified port
 * @param port {integer} (defaults to process.env.PORT)
 */


module.exports={
  server: app,
  start: port => {
    let PORT = 6000;
    app.listen(PORT, () => { console.log(`I am alive on ${PORT}`);
    });

  },
};
