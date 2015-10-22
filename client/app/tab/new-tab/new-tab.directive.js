'use strict';

angular.module('tabsApp')
  .directive('newTab', function () {
    return {
      templateUrl: 'app/tab/new-tab/new-tab.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });