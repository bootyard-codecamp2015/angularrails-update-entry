( function() {
  'use strict';

  angular.module('angular_rails', [
    // Libraries
    'templates',
    'ngRoute',
    // Resources
    'public.resource.topic',
    // Controller
    'public.ctrl.topicPageCtrl',
    'public.ctrl.topicListCtrl'
  ])
  .config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'angular_rails/public/landing.html'
        })
        .when('/show/:topic_id', {
          templateUrl: 'angular_rails/public/show/show-topic.html'
        });
    }
  ]);
})();