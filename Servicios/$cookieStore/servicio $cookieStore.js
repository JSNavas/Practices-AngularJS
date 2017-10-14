app.controller('loginCtrl', function appCtrl($cookieStore){

    function subirDatosDeSesion(datos){
        // sube a las cookies la variable con su contenido
        $cookieStore.put('conectado', true);
        $cookieStore.put('id', datos[0]);
        $cookieStore.put('user', datos[1]);
        $cookieStore.put('email', datos[2]);

        //obtiene los valores de las cookies con esas variables
        $cookieStore.get('conectado');
        $cookieStore.get('id');
        $cookieStore.get('user');
        $cookieStore.get('email');

        // se elimina la variables de las cookies
        $cookieStore.remove('conectado');
        $cookieStore.remove('id');
        $cookieStore.remove('user');
        $cookieStore.remove('email');

    }

});
