'use strict';

angular.module('tabsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tab-member', {
        url: '/tab/:tabId/member/:memberId',
        templateUrl: 'app/tab/tab-member/tab-member.html',
        controller: 'TabMemberCtrl'
      });
  });