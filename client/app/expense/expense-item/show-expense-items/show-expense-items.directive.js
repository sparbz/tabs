'use strict';

angular.module('tabsApp')
  .directive('showExpenseItems', function () {
    return {
      templateUrl: 'app/expense/expense-item/show-expense-items/show-expense-items.html',
      restrict: 'EA'
    };
  });