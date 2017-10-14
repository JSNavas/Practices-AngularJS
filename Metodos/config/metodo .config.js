// se crea una instancia al modulo angular
var app = angular.module('app', ['ngRoute', 'ngCookies']);

// Configuración de las rutas
app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'index.html',
            controller  : 'appCtrl'
        })
        .when('/signup', {
            templateUrl : 'signup.php',
            controller  : 'signupCtrl'
        })
        .when('/login', {
            templateUrl : 'login.php',
            controller  : 'loginCtrl'
        })
        .when('/home', {
            resolve:{
                 "check": function($location, $rootScope){
                     if(!$rootScope.conectado){
                         $location.path("/");
                     }
                 }
            },
            templateUrl : 'home.html',
            controller  : 'homeCtrl'
        })
        .otherwise({
            redirectTo: '/'   //sirve para cuando se intente acceder a cualquier otra ruta no declarada. 
                              // y se rediriga a la raiz
        });

});