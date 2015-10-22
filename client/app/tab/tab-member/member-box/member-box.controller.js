'use strict';

angular.module('tabsApp')
  .controller('MemberBoxCtrl', function ($scope, tab, tabMember) {

    $scope.getCurrentTab = function () {
        tabMember.getCurrentTab($scope.tabId)
          .then(function (newTab) {
            $scope.currentTab = newTab;
          });
    };

    $scope.getCurrentMember = function () {
        tabMember.getCurrentMember($scope.tabId, $scope.memberId)
          .then(function(member) {
            $scope.currentMember = member;
          });
    };

    $scope.toggleEditor = function () {
      if ($scope.editorEnabled === true) {
        $scope.editorNameSave();
        $scope.updateMemberName();
        $scope.editorEnabled = false;
      } else {
        $scope.editorEnabled = true;
        $scope.editableName = $scope.currentMember.name;
      }
    };

    $scope.updateMemberName = function () {
        tab.getCurrentTab().then(function(curTab) {
          console.log($scope.memberId);
          tabMember.updateMemberName(curTab, $scope.memberId, $scope.editableName)
            .then(function(res) {
              $scope.currentTab = res;
              $scope.$parent.$parent.$parent.currentTab = res;
              console.log($scope.currentTab);
              console.log($scope.$parent.$parent.currentTab);
          });
        });

        
    };

    $scope.editorNameSave = function () {
      $scope.currentMember.name = $scope.editableName;
    };

    $scope.log = function (msg) {
      console.log(msg);
    };

   $scope.currentTab = {};
   $scope.currentMember = {};
   $scope.editorEnabled = false;
   $scope.editableName = '';
   $scope.getCurrentTab();
   $scope.getCurrentMember();

  });
    