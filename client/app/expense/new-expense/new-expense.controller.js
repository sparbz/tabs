'use strict';

angular.module('tabsApp')
  .controller('NewExpenseCtrl', function ($scope, tab, expense) {

    $scope.getCurrentTab = function () {
        tab.getCurrentTab().then(function (currentTab) {
            $scope.currentTab = currentTab;
        });
    };

    $scope.createExpense = function (newExpense) {
        expense.createExpense(newExpense).then(function (exp) {
            $scope.addExpense(exp);
            $scope.$parent.getCurrentTab();
            $scope.$parent.getExpenses();
        });

      //   $rootScope.$broadcast('add-new-expense-item', exp);
      // $scope.resetExpenseItem();
        
    };

    $scope.addExpense = function (exp) {
        console.log($scope.currentTab.members);
        $scope.currentTab.expenses.push(exp._id);
        $scope.getCurrentTab();
        tab.updateTab($scope.currentTab);
    };

    $scope.currentTab = $scope.$parent.currentTab;

    $scope.newExpense = {
        name: '',
        tabID: 0,
        expenseItems: []
    };

    $scope.$watch('tabId', function(newID, oldID) {
        if (newID !== oldID) {
            $scope.getCurrentTab(newID);
            $scope.newExpense.tabID = newID;
        }
    });

  });
