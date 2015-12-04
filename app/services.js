angular.module('CanadaServices', ['ngResource'])
.factory('City', ['$resource', function($resource){
	return $resource('http://rest.wikimedia.org/en.wikipedia.org/v1/page/summary/:city')
}]);