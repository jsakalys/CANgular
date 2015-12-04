var app = angular.module('CanadaApp', ['CanadaServices', 'CanadaCtrls', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/index.html',
	}).when('/:city', {
		templateUrl: 'views/city.html',
		controller: 'CityCtrl'
	}).otherwise({
		templateUrl: 'views/404.html'
	});
	$locationProvider.html5Mode(false).hashPrefix("!");
}]);