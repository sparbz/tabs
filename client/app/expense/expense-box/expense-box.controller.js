'use strict';

angular.module('tabsApp')
  .controller('ExpenseBoxCtrl', function ($scope, expense) {

    $scope.toggleNewExpenseItem = function () {
        if ($scope.showNewExpenseItem) {
            $scope.showNewExpenseItem = false;
        } else {
            $scope.showNewExpenseItem = true;
        }
    };

    $scope.toggleExpenseDetails = function () {
        if ($scope.showExpenseDetails) {
            $scope.showExpenseDetails = false;
        } else {
            $scope.showExpenseDetails = true;
        }
    };

    $scope.log = function(msg) {
        console.log(msg);
    };

    $scope.updateExpense = function (exp) {
        expense.updateExpense(exp).then(function () {
            $scope.sumItems();
        });
    };

    $scope.removeExpenseItem = function (itemIndex) {
        console.log(itemIndex);
        console.log($scope.exp);
        $scope.exp.expenseItems.splice(itemIndex, 1);
        console.log($scope.exp);
        $scope.updateExpense($scope.exp);
    };

    $scope.sumItems = function () {
        $scope.sum = 0;
        for (var i = 0; i< $scope.members.length; i++) {
            $scope.memberSums[i+1] = 0;
        }
        for (i = 0; i < $scope.exp.expenseItems.length; i++) {
            $scope.sum += (1*$scope.exp.expenseItems[i].price);
            $scope.memberSums[$scope.exp.expenseItems[i].paidByID] = (1*$scope.exp.expenseItems[i].price);
        }
    };

    $scope.members = $scope.$parent.$parent.$parent.currentTab.members;

    $scope.sum = 0;
    $scope.memberSums = {};
    $scope.sumItems();

    $scope.showNewExpenseItem = false;
    $scope.showExpenseDetails = false;

    $scope.$on('add-new-expense-item', function (event, args) {
        if (args.exp === $scope.exp) {
            $scope.exp.expenseItems.push(args.item);
            $scope.updateExpense($scope.exp);
        }
    });

    $scope.$watch('$parent.$parent.currentTab.members', function(newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.members = newVal;
        }
        
    });
  });
