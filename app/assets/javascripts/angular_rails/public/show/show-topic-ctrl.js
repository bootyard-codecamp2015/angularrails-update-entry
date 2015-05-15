( function() {
 'use strict';

 angular.module("public.ctrl.topicPageCtrl", [])
 .controller('topicPageController', [ '$scope', '$routeParams', '$filter', 'Topic', 
     function($scope, $routeParams, $filter, Topic) {
     $scope.topic = {};
     Topic.get({ id: $routeParams.topic_id }).$promise.then(function(data) {
       $scope.topic = data;
     });

      $scope.updateTopic = function(topic_id) {
        Topic.update({ id: $scope.topic.id }, $scope.topic)
          .$promise.then(function(data) {
            if(data.success == true) {
              alert('Success');
            } else {
              alert("Error in updating profile!");
            }
          });
      }
    }
 ]);
})();