var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'appCtrl',
            templateUrl: 'home.html'
        })
        .when('/descargas', {
            controller: 'appCtrl',
            templateUrl: 'descargas.html'
        })
        .when('/opciones', {
            controller: 'appCtrl',
            templateUrl: 'opciones.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('appCtrl', function(){
    //código del controlador (lo estoy usando en todas las rutas, en este sencillo ejemplo)
});