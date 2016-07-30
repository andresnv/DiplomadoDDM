   angular.module('lab1b', [])
        .controller('lab1bController', function($scope){
			
			
			$scope.angular_filters = [
                  {"name": "Filter"},
                  {"name": "Currency"},
                  {"name": "Number"},
                  {"name": "Date"},
				  {"name": "Json"},
				  {"name": "Lowercase"},
				  {"name": "uppercase"}
              ];
			
			
			
			$scope.angular_input = [
                  {"name": "Test"},
                  {"name": "Date"},
                  {"name": "Date Time"},
                  {"name": "Time"},
				  {"name": "Week"},
				  {"name": "Month"}
              ];			

        });