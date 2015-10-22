'use strict';

angular.module('tabsApp')
  .directive('newExpense', function () {
    return {
      scope: {
        tabId: '='
      },
      templateUrl: 'app/expense/new-expense/new-expense.html',
      controller: 'NewExpenseCtrl',
      restrict: 'EA'
    };
  });