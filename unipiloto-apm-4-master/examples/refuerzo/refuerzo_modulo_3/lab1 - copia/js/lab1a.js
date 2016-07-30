/*angular.module('lab1a', [])
	.controller('lab1aController', function($scope){
				
		$scope.reset = function(){		
			
			$scope.name="Juan Camil0";
			$scope.id=123456789;
			$scope.profession="Diseñador";
			$scope.salary=500000;
			$scope.phone="6989898";
			$scope.address="calle siempre viva";
		}
	
		$scope.reset();
		
   });*/
   
   
   angular.module('lab1a', [])
        .controller('lab1aController', function($scope){
            $scope.Data = {
                /*"name": "Alejandro Romero",
                "course": "Diplomado AM-2"*/			
				
				"name":"Juan Camil0",
				"id":123456789,
				"profession":"Diseñador",
				"salary":500000,
				"phone":6989898,
				"address":"calle siempre viva"				
            }
        });