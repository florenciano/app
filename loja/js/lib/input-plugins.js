// criando nosso primeiro plugins
// baseado no arquivo: js/carrinho/input-filtro.js


(function($) {

	var filtro = /[0-9]/;

	// a linha abaixo é a estrutura minima de um plugin
	$.fn.inputNumerico = function() {

		this.on("keypress", function(event) {
			var digitado = String.fromCharCode(event.charCode);

			if(event.charCode && !filtro.test(digitado)) {
				event.preventDefault();
			}
		});

		return this;
	}

})(jQuery);

