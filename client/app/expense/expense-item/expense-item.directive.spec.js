'use strict';

describe('Directive: expenseItem', function () {

  // load the directive's module and view
  beforeEach(module('tabsApp'));
  beforeEach(module('app/expense/expense-item/expense-item.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<expense-item></expense-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the expenseItem directive');
  }));
});