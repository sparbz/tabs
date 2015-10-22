'use strict';

angular.module('tabsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('expense', {
        url: '/tab/:tabId/expense/:expenseId',
        templateUrl: 'app/expense/expense.html',
        controller: 'ExpenseCtrl'
      });
  });