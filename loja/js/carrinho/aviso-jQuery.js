// mostrar/ocultar uma div de aviso na pagina agora em jQuery
(function($){
	"use strict";

	// definindo variavel com os devido rotulo
	var textoEsconde = "Esconder";
	// criando link..
	var aNova = $( "<a>" ).attr( "id", "linkaviso" ).attr( "href", "#" )
		.text(textoEsconde);

	// add uma função de click
	aNova.on( "click", function(event) {

		// pegando a div de aviso
		var div = $(this).next();
		div.toggle();

		// criando as condicionais para alterar o texto
		if(div.is( ":visible" )) {
			aNova.text(textoEsconde);
		} else {
			aNova.text( "Aviso" );
		}

		event.preventDefault();

		// no final da func click add no DOM
	}).prependTo( "#principal" );

})(jQuery);