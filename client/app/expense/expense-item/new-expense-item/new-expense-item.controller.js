'use strict';

angular.module('tabsApp')
  .controller('NewExpenseItemCtrl', function ($scope, $rootScope) {

    $scope.log = function (msg) {
      console.log(msg);
      console.log($scope.$parent.$parent.exp);
    };

    $scope.addNewExpense = function () {
      // $scope.$parent.$parent.exp.expenseItems.push($scope.newExpenseItem);
      $rootScope.$broadcast('add-new-expense-item', {
        item: $scope.newExpenseItem,
        exp: $scope.exp
      });
      $scope.resetExpenseItem();


    };

    $scope.resetExpenseItem = function () {
      $scope.newExpenseItem = {
        name: '',
        price: 0.00,
        paidByName: '',
        paidByID: '1'
      };
    };

    $scope.paidByName = $scope.members[0].name;

    $scope.currentExpense = $scope.$parent.$parent.exp;

    $scope.newExpenseItem = {
      name: '',
      price: 0.00,
      paidByName: '',
      paidByID: '1'
    };

    $scope.newExpenseItem.paidByID = $scope.members[0].userID;

    $scope.$watch('members', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        console.log('change');
      }
    });


  });
