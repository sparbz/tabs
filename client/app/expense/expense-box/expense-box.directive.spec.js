'use strict';

describe('Directive: expenseBox', function () {

  // load the directive's module and view
  beforeEach(module('tabsApp'));
  beforeEach(module('app/expense/expense-box/expense-box.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<expense-box></expense-box>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the expenseBox directive');
  }));
});