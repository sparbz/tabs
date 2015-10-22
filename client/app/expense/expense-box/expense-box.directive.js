'use strict';

angular.module('tabsApp')
  .directive('expenseBox', function () {
    return {
      scope: {
      	exp: '=exp',
      	num: '=num'
      },
      templateUrl: 'app/expense/expense-box/expense-box.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });