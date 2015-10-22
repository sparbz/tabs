'use strict';

describe('Controller: NewExpenseItemCtrl', function () {

  // load the controller's module
  beforeEach(module('tabsApp'));

  var NewExpenseItemCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewExpenseItemCtrl = $controller('NewExpenseItemCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
