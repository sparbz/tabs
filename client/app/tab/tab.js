'use strict';

angular.module('tabsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tab', {
        url: '/tab',
        templateUrl: 'app/tab/tab.html',
        controller: 'TabCtrl'
      });
  });