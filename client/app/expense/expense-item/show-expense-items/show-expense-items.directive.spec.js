'use strict';

describe('Directive: showExpenseItems', function () {

  // load the directive's module and view
  beforeEach(module('tabsApp'));
  beforeEach(module('app/expense/expense-item/show-expense-items/show-expense-items.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<show-expense-items></show-expense-items>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the showExpenseItems directive');
  }));
});