'use strict';

angular.module('tabsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view-tab', {
        url: '/tab/:shortID',
        templateUrl: 'app/tab/view-tab/view-tab.html',
        controller: 'ViewTabCtrl'
      });
  });