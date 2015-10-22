'use strict';

angular.module('tabsApp')
  .factory('tab', function ($http, $q) {
    // API
    var apiUrl = '/api/tabs/';
    var service = {};

    service.currentTab = {};

    service.getCurrentTab = function () {
        var def = $q.defer();

        def.resolve(service.currentTab);

        return def.promise;
    };

    service.setCurrentTab = function (id) {
        var def = $q.defer();

        $http.get(apiUrl + id).success(function(res) {
            service.currentTab = res;
            def.resolve(service.currentTab);
        }).error(function() {
            def.reject('Failed to get tab.');
        });

        return def.promise;
    };

    // getTabs(): get all the tabs in the database
    service.getTabs = function () {
        var def = $q.defer();

        $http.get(apiUrl).success(function(res) {
            def.resolve(res);
        }).error(function() {
            def.reject('Failed to get tabs.');
        });

        return def.promise;
        
    };

    // getTab(id): get a single tab (with _id = id)
    service.getTab = function (id) {
        var def = $q.defer();

        $http.get(apiUrl + id).success(function(res) {
            def.resolve(res);
        }).error(function() {
            def.reject('Failed to get tab.');
        });

        return def.promise;
    };

    service.createTab = function (data) {
        var def = $q.defer();

        $http.post(apiUrl, data).success(function(res) {
            def.resolve(res);
        }).error(function() {
            def.reject('Failed to create tab.');
        });

        return def.promise;
    };

    service.deleteTab = function (id) {
        var def = $q.defer();

        $http.delete(apiUrl + id).success(function(res) {
            def.resolve(res);
        });

        return def.promise;
    };
    
    service.updateTab = function (data) {
        var def = $q.defer();

        $http.put(apiUrl + data._id, data).success(function(res) {
            def.resolve(res);
        }).error(function() {
            def.reject('Failed to update expense.');
        });

        return def.promise;
    };

    service.updateTabView = function () {

    };

    // API
    return service;
});
