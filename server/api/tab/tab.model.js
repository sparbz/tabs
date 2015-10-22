'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TabSchema = new Schema({
  name: String,
  info: String,
  shortID: String,
  expenses: [],
  members: [],
  active: Boolean,
  date: Date
});

module.exports = mongoose.model('Tab', TabSchema);