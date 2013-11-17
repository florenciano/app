// criando filtro [pesquisa] na página

(function($) {
	"use strict";

	// pegando o input text onde se fará a pesquisa
	var input = $( ".filtro input" );

	// atribuindo a função conforme for digitando
	input.on( "keyup" , function(event) {

		// trabalhando o valor digitado no input : sem espaço e maisuculas
		var procurado = $(this).val().trim().toUpperCase();

		// pegando todos os "li" da marcação onde esta alocado o conteudo que queremos
		var lis = $( "#carrinho li" );

		// condicional pra verificar o que esta sendo digitado ou não
		// procurado.length é 0 quando não estiver nada digitado
		if(procurado.length) {

			// pegando todos os filhos desta "li" que começa invisivel
			// em seguida fazemos um filtro usando a func "filter"
			lis.hide().find( ".item-info *" ).filter(function(){
				// "this" pode ser qualquer coisa "p", "h2", "span", "a"
				// não importa queremos apenas o seu conteúdo
				var conteudo = $(this).text();

				// vamos eliminar todos os conteudos que tiver ":"
				// e vamos manter todo o conteúdo do filtro que estamos querendo
				// "indexOf" retorna o numero da posicao da string pesquisado
				// qdo não encontra retorna -1
				return conteudo.indexOf(":") === -1 && conteudo.indexOf(procurado) !== -1;

			// retorna todas as "li" selecionadas visível
			}).closest( "li" ).show();

		} else {
			lis.show();
		}
	});


})(jQuery);