'use strict';

describe('Controller: ExpenseBoxCtrl', function () {

  // load the controller's module
  beforeEach(module('tabsApp'));

  var ExpenseBoxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpenseBoxCtrl = $controller('ExpenseBoxCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
