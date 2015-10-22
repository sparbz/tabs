'use strict';

describe('Controller: ShowTabsCtrl', function () {

  // load the controller's module
  beforeEach(module('tabsApp'));

  var ShowTabsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowTabsCtrl = $controller('ShowTabsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
