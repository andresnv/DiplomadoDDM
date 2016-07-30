angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope) {

})
   
.controller('page1Ctrl', function($scope) {

})
   
.controller('page2Ctrl', function($scope) {

})
   
.controller('page3Ctrl', function($scope) {

})
.controller('page4Ctrl', function($scope, $http){
	var url = "data.json";
	//var url = "http://localhost/AndresDiplomadoAMP4/Ejercicios/Modulo3/Lab20/prueba.php";
	$http.get(url).success(function(response){
		console.log(response);
		$scope.students = response;
	});
})
.controller('page5Ctrl', function($scope, $state) {
	$scope.goto=function(){
		localStorage.setItem('EmailApp', document.getElementById("UserName").value);
		localStorage.setItem('PassApp', document.getElementById("Password").value);
		$state.go('tabsController.cartTabDefaultPage');
		//window.open('page6', '_system', 'location=yes');
	}
});