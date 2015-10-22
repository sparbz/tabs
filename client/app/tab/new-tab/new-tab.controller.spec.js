'use strict';

describe('Controller: NewTabCtrl', function () {

  // load the controller's module
  beforeEach(module('tabsApp'));

  var NewTabCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewTabCtrl = $controller('NewTabCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
