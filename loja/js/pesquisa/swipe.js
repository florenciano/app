// Usando plugin para arrastar item na pagina em dispositivos móveis

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

	// preparando o som q ira executar qdo a tarefa for concluída
	// usando API do HTML5
	var som = new Audio( "audio/swipe.wav" );

	// add noss evento de "swipeleft": da direita p/ esquerda
	// 	-- EVENTO NAO TA ROLANDO ---
	$( "#carrinho li" ).on( "swipeleft", function(event) {

		var li = $(this);
		console.log("hola datevid");
		// para evitar de sumir repentinamente
		li.fadeOut( "slow" , function() {

			// toca um som e contabilza o total na sacola
			som.play();
			var total = sacola.data("total") + 1;
			sacola.data("total", total);

			// alterando o display
			sacola.text("Vocé tem " + total + " produto(s) na sacola");
			// apague o item arrastado
			$(this).remove();
		});
	});

})(jQuery);