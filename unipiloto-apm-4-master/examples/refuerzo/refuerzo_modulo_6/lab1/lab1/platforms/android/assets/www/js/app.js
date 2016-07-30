/*angular.module('lab1d', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
		
	$routeProvider

	.when('/lab1a', {
		templateUrl : "../lab1/index.html"
		//controller: 'lab1aController'
	})
	
	.when('/lab1b', {
		templateUrl: "../lab2/index.html"
		//controller: 'lab1bController'
	})

	.when('/lab1c',	{
		templateUrl: "../lab3/index.html"
		//controller: 'lab1cController'
	})
	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'otherwise.html'
	});
}])
*/
/*.controller('lab1aController', function($scope, $http){
	var url = "data_mobile.json";	
	$http.get(url).success(function(response){
		console.log(response);		
		$scope.Mobiles = response;
	});
})

.controller('lab1bController', function($scope, $http){
	var url = "data_smartphone.json";	
	$http.get(url).success(function(response){
		console.log(response);		
		$scope.Smartphones = response;
	});
})*/


angular.module('lab1d', ['ngRoute'])
               .config(['$routeProvider', function($routeProvider){

            
            $routeProvider

            .when('/lab1a', {
                templateUrl : "../lab1/index.html"
            })
            
            .when('/lab1b', 
                {
                    templateUrl: "../lab2/index.html"
                })

            .when('/lab1c',
                    {
                        templateUrl: "../lab3/index.html"
            })

            .otherwise({
                redirectTo: '/',
                templateUrl: 'otherwise.html'
            });
 }])