'use strict';

angular.module('tabsApp')
  .factory('tabMember', function ($q, tab) {
    var service = {};

    service.getCurrentTab = function (tabID) {
        var def = $q.defer();

        tab.getTab(tabID).then(function(res) {
            def.resolve(res);
        });

        return def.promise;
    };

    service.getCurrentMember = function (tabID, memberID) {
        var def = $q.defer();

        service.getCurrentTab(tabID).then(function(tab) {
            def.resolve(tab.members[memberID-1]);
        });

        return def.promise;
    };

    service.updateMemberName = function (curTab, memberID, name) {
        var def = $q.defer();

        for (var i in curTab.members) {
            if (curTab.members[i].userID === memberID) {
                curTab.members[i].name = name;
            }
        }

        tab.updateTab(curTab).then(function() {
            def.resolve(curTab);
        });

        return def.promise;
    };

    return service;

  });
