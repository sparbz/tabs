'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  name: String,
  tabID: String,
  expenseItems: []
});

module.exports = mongoose.model('Expense', ExpenseSchema);