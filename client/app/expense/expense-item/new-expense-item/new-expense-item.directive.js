'use strict';

angular.module('tabsApp')
  .directive('newExpenseItem', function () {
    return {
      scope: {
        members: '=members',
        exp: '=exp'
      },
      templateUrl: 'app/expense/expense-item/new-expense-item/new-expense-item.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.$watch(attrs.members, function (value) {
          console.log(value);
        });
      }
    };
  });