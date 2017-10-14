// usuarioSesion    <-----
// passSesion       <----- variables que se enviaran por POST

// usuario_usuario  <-----
// pass_usuario     <----- datos que contienen esas variables

$http.post('pages/sesion.php', {usuarioSesion:usuario_usuario,passSesion:pass_usuario})
    .success(function(datos) {
        if(datos == "true"){
            irAHome();
            // se oculta el boton de cerrar modal
            $(".close").addClass("hide");
            $("#mensaje").html("<div class='alert alert-success' style='text-align: center;' role='alert'><span style='font-size:21px; top:4px; text-align: center;'></span>Iniciando sesion...</div>");
            $("#cargando").html('<img src="img/loading.gif" style="width: 10%; background: transparent; bottom: 37px; left: 255px; position: relative;">');
            $("#resultado2").html("");
        
        }else{
            $("#resultado2").html("<div class='alert alert-danger' role='alert'><span class='glyphicon glyphicon-remove' style='font-size:20px; top:4px;'></span> El usuario o contraseña son incorrectos</div>");
            $("#iniciarSesion").val("Iniciar sesion");
        }
    })
    .error(function(datos) {
        console.log('Error: ' + datos);
    });