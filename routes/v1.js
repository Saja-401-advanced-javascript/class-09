

const express = require('express');
const router = express.router();

const categories = require('../models/categories/categories.js');
const products = require('../models/products/products.js');

// route param: call an id
// router param : creating a callback function with (req res next) that can attach things to the request parameters
// as follow : req parameters call an id, that need to tell me url
// middle ware can modify the request

// getModel is a middleware function that we gonna pass it in a rout
function getModel(req, res, next) {
  let model = req.params.model; // dynamic model
  switch (model) {
  case 'products':
    req.model = products;
    next();
    return;
  case 'categories':
    req.model = categories;
    // products and categories come from the requires up above
    next();
    return;
  default:
    next('model not found'); // if we pass smth in the next, if u wrote ur error middleware correctly, it moves it to the error hanling
    return;
  }
}

router.param('model', getModel);

router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handlePut);
router.delete('/api/v1/:model/:id', handleDelete);


function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      // console.log(id)
      // console.log(req.model)
      let count = results.length;
      res.json({ count, results });
    }).catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(record => {
      res.json(record);
    }).catch(next);
}

function handlePost(req, res, next) {
  req.model.create(req.body)
    .then(results => {
      res.json(results);
    }).catch(next);
}

function handlePut(req, res, next) {
  let id = req.params.id;
  // console.log(id)
  // console.log(req.body)
  req.model.update(id, req.body)
    .then(data => {
      res.json(data);
    }).catch(next);
}

function handleDelete(req, res, next) {
  let mess = 'item deleted';
  let id = req.params.id;
  // console.log(id)
  // console.log(req.model)
  req.model.delete(id)
    .then(() => {
      res.json(mess);
    }).catch(next);
}

module.exports = router;
