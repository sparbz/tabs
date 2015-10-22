'use strict';

angular.module('tabsApp')
  .directive('expenseItem', function () {
    return {
      templateUrl: 'app/expense/expense-item/expense-item.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });