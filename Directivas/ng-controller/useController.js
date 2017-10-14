var app = angular.module("app", []);

// se crea el nombre controllador y con el objeto $scope se crea un variable
app.controller("useController", function($scope){
	$scope.mensaje = "Usando el controlador";
});


