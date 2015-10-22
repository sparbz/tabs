'use strict';

describe('Controller: TabCtrl', function () {

  // load the controller's module
  beforeEach(module('tabsApp'));

  var TabCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabCtrl = $controller('TabCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
