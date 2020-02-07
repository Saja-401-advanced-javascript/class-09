'use strict';


/**
 * 500 Middleware
 * @module middleware/500
 */

/**
 * Sends a JSON Formatted 500 Response
 * @param err {string} Error Text
 * @param req {object} Express Request Object
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */

function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({ error: err });
}

module.exports= errorHandler;
