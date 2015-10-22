'use strict';

describe('Directive: newExpenseItem', function () {

  // load the directive's module and view
  beforeEach(module('tabsApp'));
  beforeEach(module('app/expense/expense-item/new-expense-item/new-expense-item.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-expense-item></new-expense-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the newExpenseItem directive');
  }));
});