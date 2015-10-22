'use strict';

angular.module('tabsApp')
  .directive('showExpenses', function () {
    return {
      scope: false,
      templateUrl: 'app/expense/show-expenses/show-expenses.html',
      restrict: 'EA'
    };
  });