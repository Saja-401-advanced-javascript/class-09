'use strict';

const schema = require('./products-schema.js');
const dataModel = require('../models.js');

class Products extends dataModel{};

module.exports = new Products(schema)
