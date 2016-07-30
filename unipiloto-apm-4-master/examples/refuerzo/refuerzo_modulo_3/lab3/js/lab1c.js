angular.module('lab1c', [])
.controller('lab1cController', function($scope){	
	$scope.link_image = 'http://dummyimage.com/200x200/000/34ffddaa';
	var ind=0;
	$scope.changeLinkImage = function(){
		if(ind==0){			
			$scope.link_image = 'http://dummyimage.com/200x200/ff3300/333';			
			ind=1;
		}
		else if(ind==1){
			$scope.link_image = 'http://dummyimage.com/200x200/000/34ffddaa';			
			ind=0;
		}
	};
});
