'use strict';

angular.module('tabsApp')
  .directive('tab', function () {
    return {
      template: '<div>Name: {{tab.name}}</div>' +
                '<div>Info: {{tab.info}}</div>' +
                '<div>Date: {{tab.date | date}}</div>',
      restrict: 'EA'
    };
  })
  .directive('tab-box', function () {
    return {
        //template: '<div class="new-tab-box">Let\'s make a new tab.</div>',
        template: 'Test',
        restrict: 'EA'
    };
  });