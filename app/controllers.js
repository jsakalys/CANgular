angular.module('CanadaCtrls', ['CanadaServices'])
.controller('CityCtrl', ['$scope', '$routeParams', 'City', function($scope, $routeParams, City){
	City.get({city: $routeParams.city}, function success(data){
		console.log(data);
		$scope.city = data;
	}, function error(data){
		console.log('Sorry! There was an error looking up the city.');
		console.log(data);
	});
}]);