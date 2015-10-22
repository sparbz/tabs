'use strict';

angular.module('tabsApp')
  .controller('ShowTabsCtrl', function ($scope, tab) {

    $scope.getTabs = function () {
      tab.getTabs().then(function(tabs) {
          $scope.tabs = tabs;
      });
    };

    $scope.tabs = [];
    $scope.getTabs();
             
  });
