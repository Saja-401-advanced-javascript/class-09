'use strict';

const schema = require('./categories-schema');
const dataModel = require('../models.js');

class Categories extends dataModel{};

module.exports = new Categories(schema)
