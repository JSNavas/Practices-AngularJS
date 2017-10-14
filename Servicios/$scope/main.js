
// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/acerca', {
            templateUrl : 'pages/acerca.html',
            controller  : 'aboutController'
        })
        .when('/contacto', {
            templateUrl : 'pages/contacto.html',
            controller  : 'contactController'
        })
        .otherwise({
            redirectTo: '/'   //sirve para cuando se intente acceder a cualquier otra ruta no declarada. 
        });
});

//código del controlador 
angularRoutingApp.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});

angularRoutingApp.controller('aboutController', function($scope) {
    // el scope se utiliza para declarar variables dentro del controlador que no pueden ser
    // utilizadas en otro controlador
    $scope.message = 'Esta es la página "Acerca de"'; 

    // tambien se pueden crear funciones
    $scope.saludar = function(){
        alert("hola");
    }

    // generalmente se mandan a llamar desde un ng-click pero se puede llamar asi misma
    // de la siguiente forma
    $scope.saludar();
});

angularRoutingApp.controller('contactController', function($scope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});
