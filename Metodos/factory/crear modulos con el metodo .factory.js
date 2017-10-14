// crear modulos con el metodo factory

// 1ra forma
app.factory("factories", function(){
	return {
		cerrarModal: function(){
			// contenido de la funcion
		}
	}
});

// 2da forma
app.factory("$factories", function(){
	var $factories = {};

	$factories.cerrarModal = function(){
		// contenido de la funcion
	}

	return $factories;
});

// llamado del modulo nuevo en un controllador
app.controller("appCtrl", function ($factories){
	$factories.cerrarModal();
})