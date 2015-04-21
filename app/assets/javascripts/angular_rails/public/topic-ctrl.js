( function() {
  'use strict';

  angular.module("public.ctrl.topicListCtrl", [])
  .controller('topicListController', [ '$scope', '$filter', 'Topic',
  	function($scope, $filter, Topic) {
  		$scope.topics = [];

      Topic.query().$promise.then(function(data) {
        $scope.topics = data;
      });


  	}
  ]);
})();