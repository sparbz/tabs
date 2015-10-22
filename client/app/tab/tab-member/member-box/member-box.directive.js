'use strict';

angular.module('tabsApp')
  .directive('memberBox', function () {
    return {
      scope: {
        tabId: '=tabId',
        memberId: '=memberId'
      },
      templateUrl: 'app/tab/tab-member/member-box/member-box.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.text = attrs.text;
      }
    };
  });