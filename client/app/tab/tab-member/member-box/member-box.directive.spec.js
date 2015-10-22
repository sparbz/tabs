'use strict';

describe('Directive: memberBox', function () {

  // load the directive's module and view
  beforeEach(module('tabsApp'));
  beforeEach(module('app/tab/tab-member/member-box/member-box.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<member-box></member-box>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the memberBox directive');
  }));
});