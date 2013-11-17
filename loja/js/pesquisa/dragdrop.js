// Usando plugin para arrastar item na pagina

(function($) {
	"use strict";

	// pegando o "p" que contem a área da sacola
	var sacola = $( ".sacola" );

	// condicional para contabilizar a qte de itens
	// repare q na marcação há o atributo data que armazena um numero
	// vamos verificar se existe um atributo data, e resetar um valor inicial "0"
	if(!sacola.data("total")) {
		// repare que vamos posteriormente pegar esta valor para manipular
		sacola.data("total", 0);
	}

	// vamos pegar a "div" que contém a img do produto e tornar arrastável
	// esta função só existe devido a importação do jQuery UI
	$( ".painel-imagem" ).draggable({
		// se soltar antes de chegar no destino ele volta ao local de origem
		revert		: 	true,
		// distância miníma para considerar um drag
		distance 	: 	10,
		// document é o container, não é permitido arrastar fora da janela
		containment	: 	"document"
	});

	// vamos definir o local de destino para finalizar o arrasto "droppable"
	sacola.droppable({
		// assim q ocorrer o toque neste elemento dispara a func abaixo
		tolerance	: 	"touch",
		drop 		: 	function(event, ui) {

			// todo arrasto q ocorrer acontecerá:
			// 1- remover o li arrastado
			// 2- incrementar o número de itens na sacola

			// "ui.draggable" é o elemento sendo arrastado; foi passado como parâmetro da func
			$( ui.draggable ).closest("li").remove();

			// pega o painel da sacola
			var destino = $(this);
			// faz a contabilização
			var total = destino.data("total") + 1;
			destino.data("total", total);

			// alterando o display
			destino.text( "Você tem " + total + "produto(s) na sacola" );

		}
	});

})(jQuery);