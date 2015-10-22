'use strict';

describe('Controller: TabMemberCtrl', function () {

  // load the controller's module
  beforeEach(module('tabsApp'));

  var TabMemberCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabMemberCtrl = $controller('TabMemberCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
