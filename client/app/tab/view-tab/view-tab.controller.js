'use strict';

angular.module('tabsApp')
  .controller('ViewTabCtrl', function ($scope, $stateParams, $location, tab, expense) {

    $scope.getCurrentTab = function () {
        tab.setCurrentTab($stateParams.shortID).then(function (currentTab) {
            $scope.currentTab = currentTab;
            $scope.getExpenses($scope.currentTab.shortID);
        });
    };

    // $scope.getExpenses = function () {
    //     for (var e in $scope.currentTab.expenses) {
    //             $scope.currentExpenses.push($scope.getExpense(e));
            
    //     }
            
    // };

    $scope.getExpenses = function (tabID) {
        expense.getTabExpenses(tabID).then(function (exps) {
            $scope.currentExpenses = exps;
            return exps;
        });
    };

    $scope.log = function (msg) {
        console.log(msg);
    };

    $scope.go = function (path) {
        $location.path(path);
    };

    $scope.goExpense = function (expID) {
        $location.path('/tab/' + $scope.currentTab.shortID + '/expense/' + (1*1+expID));
    };



    $scope.currentTab = {};
    $scope.flag = 'Hello';
    $scope.currentExpenses = [];
    $scope.getCurrentTab();
    


  });
