'use strict';

describe('Service: tabMember', function () {

  // load the service's module
  beforeEach(module('tabsApp'));

  // instantiate service
  var tabMember;
  beforeEach(inject(function (_tabMember_) {
    tabMember = _tabMember_;
  }));

  it('should do something', function () {
    expect(!!tabMember).toBe(true);
  });

});
