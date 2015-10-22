'use strict';

describe('Directive: newTab', function () {

  // load the directive's module and view
  beforeEach(module('tabsApp'));
  beforeEach(module('app/tab/new-tab/new-tab.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-tab></new-tab>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the newTab directive');
  }));
});