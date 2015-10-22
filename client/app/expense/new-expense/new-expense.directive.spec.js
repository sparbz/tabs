'use strict';

describe('Directive: newExpense', function () {

  // load the directive's module and view
  beforeEach(module('tabsApp'));
  beforeEach(module('app/expense/new-expense/new-expense.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-expense></new-expense>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the newExpense directive');
  }));
});