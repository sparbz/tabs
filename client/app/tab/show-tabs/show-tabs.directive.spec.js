'use strict';

describe('Directive: showTabs', function () {

  // load the directive's module and view
  beforeEach(module('tabsApp'));
  beforeEach(module('app/tab/show-tabs/show-tabs.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<show-tabs></show-tabs>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the showTabs directive');
  }));
});