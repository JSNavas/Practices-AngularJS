// $location es un servicio que utilizado generalmente para redirigir a una ruta especificada
// con $routeProvider

app.controller("appCtrl", function($location){
	$location.path("/home");
});