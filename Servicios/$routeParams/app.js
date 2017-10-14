app = angular.module("app",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller: "homeCtrl",
			templateUrl: "home.html"
		})
		.when("/perfil/:id",{
			controller: "perfilCtrl",
			templateUrl: "perfilUsuario.html"
		})
		.otherwise({
		    redirectTo: '/'
		});
});

app.controller('homeCtrl',function($scope){
	$scope.usuario = "";
	
});

app.controller('perfilCtrl', function($scope, $routeParams, $location, $rootScope){
	$scope.usuarios = ["jesus","luis","leonel","pedro"];

	for (var i = 0; i < $scope.usuarios.length; i++){		
		// $routeParams.id es lo que se agrege despues de la ruta /perfil/:id
		if($routeParams.id == $scope.usuarios[i]){
			$scope.usuario = $scope.usuarios[i];
			$rootScope.registrado = true;
			break;
		}
	}

});