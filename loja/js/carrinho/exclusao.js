// excluir produto da tela usando jQuery

// criando IIFE e recebendo como parâmetro a lib jQuery
(function($){
	"use strict";

	// selecionando todos os links da pagina
	// de acordo com a estrutura html temos o seguinte:
	$( "#carrinho li form p a" ).on( "click" , function(event) {
		// pega o link clicado;
		// vamos ate o "li" pai próximo para deletar da tela
		$(this).closest( "li" ).remove();

		event.preventDefault();
	});

})(jQuery);