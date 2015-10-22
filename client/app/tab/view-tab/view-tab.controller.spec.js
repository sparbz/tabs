'use strict';

describe('Controller: ViewTabCtrl', function () {

  // load the controller's module
  beforeEach(module('tabsApp'));

  var ViewTabCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewTabCtrl = $controller('ViewTabCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
