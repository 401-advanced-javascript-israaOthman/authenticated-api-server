'use strict';

const Model = require('../GlobalModel');
const schema = require('./catSchema');


class Category extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new Category(); 
