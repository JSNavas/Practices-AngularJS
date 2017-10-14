// De esta manera se emplea el metodo run que ejecuta una funcion al momento de empezar
// a correr nuestra aplicacion se utiliza generalmente para validar datos en la cookie

app.run(function($rootScope, $location, $cookieStore){
    // cuando la ruta cambie
    $rootScope.$on('$routeChangeStart',function(event, next, current){
        // se valida que no se ingrese a la home sin estar conectado
        if($cookieStore.get('conectado') == false || $cookieStore.get('conectado') == null){
            if(next.templateUrl == "pages/home.html"){
                $location.path("/");
            }
            
        }else{
            // si se ingresa a alguna de estas rutas iniciales estando conectado, sera redirigido a la home
            if(next.templateUrl != "pages/home.html"){
                $location.path("/home");
                // validar que sea redirigido a la pagina en la que esta el usuario
            }
        }

    })
})