// add e excluindo lista na pagina
(function($){
	"use strict";

	// removendo os itens da lista
	$( ".sugestoes" ).on( "click", "li" , function() {
		$(this).remove();
	});

	// ao clicar no btn incluir...
	$( "input[type=button]" ).on( "click" ,function(event) {
		// pega o input contendo o texto
		var inputSugestao = $( ".nova-sugestao input[type=text" );

		// pego o valor digitado deste input
		// OBS: não funciona se eu pegar direto o value acima
		var sugestao = inputSugestao.val();

		// cria uma "li" na "ul.sugestoes"
		var li = $( "<li>", { class : "novaSugestao" } ).appendTo( ".sugestoes" );
		$( "<span>" ).text(sugestao).appendTo( li );

		// limpa o input e põe o foco nele
		inputSugestao.val( '' ).focus();
	});

})(jQuery);