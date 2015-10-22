'use strict';

describe('Directive: viewTab', function () {

  // load the directive's module and view
  beforeEach(module('tabsApp'));
  beforeEach(module('app/tab/view-tab/view-tab.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<view-tab></view-tab>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the viewTab directive');
  }));
});