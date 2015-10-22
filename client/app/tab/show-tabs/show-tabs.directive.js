'use strict';

angular.module('tabsApp')
  .directive('showTabs', function () {
    return {
      templateUrl: 'app/tab/show-tabs/show-tabs.html',
      restrict: 'EA'
    };
  });