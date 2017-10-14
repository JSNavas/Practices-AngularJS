// Creación del módulo
var app = angular.module('app', ['ngRoute']);

// Configuración de las rutas
app.config(function($routeProvider) {

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
app.controller('mainController', function($rootScope) {
    // el servicio $rootScope se utiliza para crear variables, en la que
    // los otros controladores pueden tener acceso a ella si heredan de dicho 
    // controlador con en este caso que los demas controladores heredan de este
    $rootScope.message = 'Hola, Mundo!';
});

app.controller('aboutController', function($scope, $rootScope){
    // aqui se guarda el valor del $rootScope
    $scope.menssage =  $rootScope.message;

    // de esta forma se modifica el valor del rootScope padre, ya que si se crea un
    // rootScope con el mismo nombre del rootScope padre, esta se modificaria y 
    // cambiaria el valor del rootScope padre
    $rootScope.message = "hola";

    // se puede acceder a las variables del $rootScope siempre y cuando no se coloque
    // el mismo nombre de la variable declarada,  ya que si no esta se modificaria y 
    // cambiaria el valor del rootScope del controlador padre si esta hereda de el
});

app.controller('contactController', function($scope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});
