angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaNetwork', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaNetwork) {
	
	$scope.PrintInfoNetwork=function(){
		
		var type = $cordovaNetwork.getNetwork()

		var isOnline = $cordovaNetwork.isOnline()
	
		var isOffline = $cordovaNetwork.isOffline()
	
	
		// listen for Online event
		/*$scope.$on('$cordovaNetwork:online', function(event, networkState){
		  var onlineState = networkState;
			  $scope.isOnline="isOnline: "+onlineState;
		})
	
		// listen for Offline event
		$scope.$on('$cordovaNetwork:offline', function(event, networkState){
		  var offlineState = networkState;
		  $scope.isOffline="isOffline: "+offlineState; 
		})
	*/
		$scope.type="Type: "+type;
		$scope.isOnline="isOnline: "+isOnline;
		$scope.isOffline="isOffline: "+isOffline;
		
				
	}	
}])
 