'use strict';

describe('Controller: ExpenseItemCtrl', function () {

  // load the controller's module
  beforeEach(module('tabsApp'));

  var ExpenseItemCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpenseItemCtrl = $controller('ExpenseItemCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
