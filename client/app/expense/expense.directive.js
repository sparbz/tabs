'use strict';

angular.module('tabsApp')
  .directive('expense', function () {
    return {
      scope: {
      	tabId: '=tabId',
      	expenseId: '=expenseId'
      },
      templateUrl: 'app/expense/expense.html',
      restrict: 'EA',
    };
  });