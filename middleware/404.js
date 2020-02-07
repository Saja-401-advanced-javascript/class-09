'use strict';

/**
 * 404 Middleware
 * @module middleware/404
 */

/**
 * Sends a JSON Formatted 404 Response
 * @param req {object} Express Request Object
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */

function notFoundHandler(req, res, next) {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({ error: 'Not Found' });
}

module.exports= notFoundHandler;
