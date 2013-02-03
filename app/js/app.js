'use strict';

/* App Module */
var app = angular.module('jsTreeApp', ['ngResource']);

var TestCtrl = function($scope, Data) {
  $scope.treeData = Data.getTreeData();
}

app.directive('jstree', function() {
  return {
    restrict: 'A',
    scope: {
      jstree: '='
    },
    link: function(scope, element, attrs) {
      scope.$watch('jstree.data', function() {
        $(element).jstree({
          "json_data" : scope.jstree,
          "plugins" : [ "themes", "json_data" ]
        });
      });
    }
  };
});

app.factory('Data', function($resource) {
  return $resource('/data/treeData.json', {}, {
    getTreeData: { method: 'GET', isArray: false }
  })
})