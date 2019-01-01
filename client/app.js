var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'attndController'
		})
		.when('/attendance', {
			templateUrl:'templates/list.html',
			controller:'attndController'
		})
		.when('/attendance/add', {
			templateUrl:'templates/add.html',
			controller:'attndController'
		})
		.when('/attendance/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'attndController'
		})
		.when('/attendance/:id/show', {
			templateUrl:'templates/show.html',
			controller:'attndController'
		});
});
