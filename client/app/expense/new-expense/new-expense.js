'use strict';

angular.module('tabsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new-expense', {
        url: '/new-expense',
        templateUrl: 'app/expense/new-expense/new-expense.html',
        controller: 'NewExpenseCtrl'
      });
  });