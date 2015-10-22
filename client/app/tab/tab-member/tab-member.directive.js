'use strict';

angular.module('tabsApp')
  .directive('tabMember', function () {
    return {
      scope: {
        tabId: '=',
        memberId: '='
      },
      templateUrl: 'app/tab/tab-member/tab-member.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	scope.tabId = attrs.tabId;
      	scope.memberId = attrs.memberId;
      }
    };
  });