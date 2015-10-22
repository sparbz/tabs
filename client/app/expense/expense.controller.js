'use strict';

angular.module('tabsApp')
  .controller('ExpenseCtrl', function ($scope, $stateParams, $rootScope, $location, expense) {

    // getExpense(expenseID): get a single expense with the ID expenseID.
    $scope.getExpense = function () {
        // expense.getExpense(expenseID).then(function(exp) {
        //     $scope.currentExpense = exp;
        // });
        expense.getTabExpenses($scope.tabId)
          .then(function (expenses) {
            $scope.currentExpense = expenses[$scope.expenseId-1];
        });

    };



    $scope.back = function () {
        $location.path('/tab/' + $stateParams.tabId);
    };

    // $scope.createExpense = function (newExpense) {
    //     expense.createExpense(newExpense);
    //     $scope.toggleNewExpenseView();
    //     $scope.getExpenses($scope.tabID);
    // };

    // $scope.deleteExpense = function (item) {
    //     expense.deleteExpense(item._id);
    //     $scope.getExpenses($scope.tabID);
    // };

    $scope.$on('test', function (event, args) {
        console.log(args);
    });

    $scope.currentExpense = {};
    $scope.tabId = $stateParams.tabId;
    $scope.expenseId = $stateParams.expenseId;
    $scope.getExpense();


  });
