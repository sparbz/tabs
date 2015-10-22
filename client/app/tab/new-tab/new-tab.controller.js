'use strict';

angular.module('tabsApp')
  .controller('NewTabCtrl', function ($scope, tab) {
    $scope.newTab = {
        name: '',
        info: '',
        date: new Date(),
        expenses: [],
        members: []
    };

    $scope.memberSchema = {
        name: 'Member',
        userID: '',
        shortID: '',
        expenses: []
    };

    $scope.numMembers = 0;

    $scope.createTab = function () {
        $scope.addMembers($scope.numMembers);
        $scope.generateShortID($scope.newTab);
        tab.createTab($scope.newTab);
        $scope.getTabs();
        $scope.view('show');
    };

    $scope.addMembers = function (num) {
        for (var i in _.range(num)) {
            $scope.newMember = $scope.memberSchema;
            $scope.newMember.name += ' ' + (i*1+1);
            $scope.newMember.userID = (i*1+1);
            $scope.newTab.members.push($scope.newMember);
            $scope.initMemberSchema();
        }
    };

    $scope.initMemberSchema = function () {
        $scope.memberSchema = {
            name: 'Member',
            userID: '',
            shortID: '',
            expenses: []
        };
    };

    $scope.generateShortID = function (member) {
        member.shortID = Math.random().toString(36).substring(7).slice(0,7).toUpperCase();
    };
  });
