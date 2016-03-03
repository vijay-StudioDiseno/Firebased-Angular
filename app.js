'use strict';

// Declare app level module which depends on views, and components
angular.module('userApp', ['ngRoute', 'userApp.home'])

.config(['$routeProvider', function($routeProvider) {
	
  $routeProvider.otherwise({redirectTo: '/'});
	
}]);
