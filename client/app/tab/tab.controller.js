'use strict';

angular.module('tabsApp')
  .controller('TabCtrl', function ($scope, $location, $http, tab) {
    // getTabs(): get all the tabs
    $scope.getTabs = function () {
        tab.getTabs().then(function(tabs) {
            $scope.tabs = tabs;
        });
    };

    // createTab(): create a new tab
    $scope.createTab = function () {
        tab.createTab($scope.testTab);
        $scope.getTabs();
    };

    // deleteTab():
    $scope.deleteTab = function (id) {
        tab.deleteTab(id);
        $scope.getTabs();
        $scope.deleteTabWarning = false;
        $scope.tabSelector = '';
        $scope.view('show');
    };

    $scope.view = function (viewName) {
        $scope.viewSwitcher = viewName;
    };

    $scope.selectTab = function (id) {
        $scope.tabSelector = id;
        $scope.view('view');
    };

    $scope.isSelected = function (id) {
        if ($scope.tabSelector === id) {
            return true;
        } else {
            return false;
        }
    };

    $scope.toggleDeleteTabWarning = function () {
        if ($scope.tabSelector) {
            if ($scope.deleteTabWarning === false) {
                $scope.deleteTabWarning = true;
            } else {
                $scope.deleteTabWarning = false;
            }
        }
    };

    $scope.toggleNewTabView = function () {
        if ($scope.showNewTabView === false) {
            $scope.showNewTabView = true;
        } else {
            $scope.showNewTabView = false;
        }
    };

    // log(): sends to console.log() for debugging purposes
    $scope.log = function (msg) {
        console.log(msg);
    };

    $scope.go = function (path) {
        $location.path( path );
    };

    $scope.tabs = $scope.getTabs();
    $scope.showTabsView = false;
    $scope.showNewTabView = false;
    $scope.deleteTabWarning = false;
    $scope.tabSelector = '';
    $scope.viewSwitcher = 'show';

    $http.get('/api/users/me').success(function(user) {
      $scope.user = user;
    });
  });
