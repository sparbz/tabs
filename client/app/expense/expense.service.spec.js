'use strict';

describe('Service: expense', function () {

  // load the service's module
  beforeEach(module('tabsApp'));

  // instantiate service
  var expense;
  beforeEach(inject(function (_expense_) {
    expense = _expense_;
  }));

  it('should do something', function () {
    expect(!!expense).toBe(true);
  });

});
