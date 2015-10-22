'use strict';

describe('Directive: showExpenses', function () {

  // load the directive's module and view
  beforeEach(module('tabsApp'));
  beforeEach(module('app/expense/show-expenses/show-expenses.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<show-expenses></show-expenses>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the showExpenses directive');
  }));
});