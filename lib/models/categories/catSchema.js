'use strict';

const mongoose = require('mongoose');

const cat = mongoose.Schema({
  name : {type: String, required: true},
  display_name: {type: String, required: true},
  description: {type: String, required: true},
});

module.exports = mongoose.model('cat', cat);

