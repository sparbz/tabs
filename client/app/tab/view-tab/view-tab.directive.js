'use strict';

angular.module('tabsApp')
  .directive('viewTab', function () {
    return {
      templateUrl: 'app/tab/view-tab/view-tab.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });