(function(){
	'use strict'

	function UseController(){
		var vm = this;

		vm.mensaje = "Usando el controlador";
	}

	angular
		.module("app");
			.controller("useController", UseController);
})();

