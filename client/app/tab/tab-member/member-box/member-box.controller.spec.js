'use strict';

describe('Controller: MemberBoxCtrl', function () {

  // load the controller's module
  beforeEach(module('tabsApp'));

  var MemberBoxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemberBoxCtrl = $controller('MemberBoxCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
