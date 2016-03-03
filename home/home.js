'use strict';

angular.module('userApp.home', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
	
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
	
}])

.controller('homeCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
	
	var ref = new Firebase('https://add-delete-users0.firebaseio.com/');
	
	$scope.users = $firebaseArray(ref);
	
	$scope.addUser = function() {
		
		$scope.users.$add({
			firstname: $scope.firstname,
			lastname: $scope.lastname,
			email: $scope.email,
			telephone: $scope.telephone,
			city: $scope.city,
			country: $scope.country
		});
		
		$scope.firstname ="";
		$scope.lastname ="";
		$scope.email ="";
		$scope.telephone ="";
		$scope.city = "";
		$scope.country = "";		
		$scope.userAdded = true;
		$scope.userDeleted = false;
		
		$scope.addeduser(user);
		
	};
	
	$scope.addeduser = function(user){
		$scope.useradded = user.firstname + " " + user.lastname;
	}
	
	$scope.deleteUser = function(user) {
		$scope.users.$remove(user);
		$scope.userDeleted = true;
		$scope.userAdded = false;
		
		$scope.deleteduser = user.firstname + " " + user.lastname;
		
	}
	
	
	
}]);