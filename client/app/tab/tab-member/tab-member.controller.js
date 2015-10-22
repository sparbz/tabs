'use strict';

angular.module('tabsApp')
  .controller('TabMemberCtrl', function ($scope, $stateParams, $location, tabMember) {
    
    $scope.getCurrentTab = function () {
        tabMember.getCurrentTab($stateParams.tabId)
          .then(function (newTab) {
            $scope.currentTab = newTab;
          });
    };

    $scope.getCurrentMember = function () {
        tabMember.getCurrentMember($stateParams.tabId, $stateParams.memberId)
          .then(function(member) {
            $scope.currentMember = member;
          });
    };

    $scope.getMemberExpenses = function () {
        // IMPLEMENT: 
        tabMember.getMemberExpenses()
          .then(function(expenses) {
              $scope.currentMemberExpenses = expenses;
          });
    };

    $scope.updateMemberName = function (name) {
        tabMember.updateMemberName($stateParams.tabId, $stateParams.memberId, name)
          .then(function(res) {
              console.log(res);
          });
    };

    $scope.back = function () {
        $location.path('/tab/' + $stateParams.tabId);
    };

    $scope.currentTab = {};
    $scope.currentMember = {};
    $scope.currentMemberExpenses = {};
    $scope.getCurrentTab();
    $scope.getCurrentMember();

  });
