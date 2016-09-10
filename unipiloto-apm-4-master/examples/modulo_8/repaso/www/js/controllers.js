angular.module('app.controllers', ['ngCordova'])
  
.controller('pagina1InfoCelCtrl', ['$scope', '$stateParams', '$cordovaDevice', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice) {
	$scope.getDeviceInformation = function(){
		$scope.device=$cordovaDevice.getDevice();
		$scope.cordova=$cordovaDevice.getCordova();
		$scope.model=$cordovaDevice.getModel();
		$scope.platform=$cordovaDevice.getPlatform();
		$scope.uuid=$cordovaDevice.getUUID();
		$scope.version=$cordovaDevice.getVersion();

	}
}])
   
.controller('pagina2InfoNetworkCtrl', ['$scope', '$stateParams', '$cordovaNetwork', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaNetwork) {
	$scope.PrintInfoNetwork=function(){		
		var type = $cordovaNetwork.getNetwork()
		var isOnline = $cordovaNetwork.isOnline()	
		var isOffline = $cordovaNetwork.isOffline()	
		$scope.type="Type: "+type;
		$scope.isOnline="isOnline: "+isOnline;
		$scope.isOffline="isOffline: "+isOffline;				
	}
}])
   
.controller('pagina3InfoAcelerometroCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceMotion) {
	 // watch Acceleration
  	var options = { frequency: 2000 };
  	var watch = $cordovaDeviceMotion.watchAcceleration(options);
	$scope.getWatchDeviceMotion = function(){
		 watch.then(null,
		 	function(err) {
	      		alert('Algo salio mal ', err);
	    	}
		 	,function(result) {
		      $scope.x = result.x;
		      $scope.y = result.y;
		      $scope.z = result.z;
		      $scope.timeStamp = result.timestamp;
	    });
	}

	$scope.getStopWatchDeviceMotion = function(){
		$cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        alert('Stop Accelerometer');
        }, function (error) {
        // error
      });
	};
}])
      
.controller('pagina4InfoCompassCtrl', ['$scope', '$stateParams', '$cordovaDeviceOrientation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceOrientation) {
	$scope.getDeviceOrientation= function(){
		$scope.magneticHeading=$cordovaDeviceOrientation.magneticHeading;
        $scope.trueHeading=$cordovaDeviceOrientation.trueHeading;
        $scope.accuracy=$cordovaDeviceOrientation.accuracy;
        $scope.timeStamp=$cordovaDeviceOrientation.timeStamp;
	};
}])
 