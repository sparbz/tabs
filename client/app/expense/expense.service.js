'use strict';

angular.module('tabsApp')
  .factory('expense', function ($http, $q) {
    
    var apiUrl = '/api/expenses/';
    var service = {};
    service.currentExpense = {};

    service.getCurrentExpense = function () {
        var def = $q.defer();

        def.resolve(service.currentExpense);

        return def.promise;

    };

    service.setCurrentExpense = function (id) {
        var def = $q.defer();

       $http.get(apiUrl + id).success(function(res) {
            service.currentExpense = res;
            def.resolve(res);
        }).error(function() {
            def.reject('Failed to get expense.');
        });

        return def.promise;
    };

    service.getExpenses = function () {
        var def = $q.defer();

        $http.get(apiUrl).success(function(res) {
            def.resolve(res);
        }).error(function() {
            def.reject('Failed to get expenses.');
        });

        return def.promise;
    };

    service.getExpense = function (id) {
        var def = $q.defer();

        $http.get(apiUrl + id).success(function(res) {
            def.resolve(res);
        }).error(function() {
            def.reject('Failed to get expense.');
        });

        return def.promise;
    };

    service.getTabExpenses = function (tabID) {
        var def = $q.defer();

        $http.get(apiUrl + 'tab/' + tabID).success(function(res) {
            def.resolve(res);
        }).error(function() {
            def.reject('Failed to get expenses.');
        });

        return def.promise;
    };

    service.createExpense = function (data) {
        var def = $q.defer();

        $http.post(apiUrl, data).success(function(res) {
            def.resolve(res);
        }).error(function() {
            def.reject('Failed to create expense.');
        });

        return def.promise;
    };

    service.deleteExpense = function (id) {
        var def = $q.defer();

        $http.delete(apiUrl + id).success(function(res) {
            def.resolve(res);
        });

        return def.promise;
    };

    service.updateExpense = function (exp) {
        var def = $q.defer();

        $http.put(apiUrl + exp._id, exp).success(function(res) {
            console.log(res);
            def.resolve(res);
        }).error(function() {
            def.reject('Failed to update expense.');
        });

        return def.promise;
    };

    return service;

  });
