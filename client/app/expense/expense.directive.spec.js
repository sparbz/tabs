'use strict';

describe('Directive: expense', function () {

  // load the directive's module
  beforeEach(module('tabsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<expense></expense>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the expense directive');
  }));
});