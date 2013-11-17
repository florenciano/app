// trabalhando com AJAX

(function($){
	"use strict";

	// pegando a "ul" que existe na marcação
	var ul = $( "#recomendacoes ul" );

	// iniciano ajax
	$.ajax({

		// definindo url
		// para melhorar a didatica o arquivo "base.json" contem os valores
		url			:  	"http://mirrorfashion.caelum.com.br/produtos",
		dataType	: 	"jsonp",

		// em caso de sucesso...
		// retorno é o obj json contendo os dados
		success : function (retorno) {

			// vamos iterar para cada produto
			$.each(retorno.produtos, function() {
				// vamos criar uma "li"
				var li = $( "<li>" );
				var img = $( "<img>" ).attr("src", this.imagem);
				var pNome = $( "<p>" ).text(this.nome);
				var pPreco = $( "<p>" ).text(formatadorMoeda.numberParaReal(this.preco));

				// append estes conteudos na "ul" definida lá em cima
				li.append(img).append(pNome).append(pPreco).appendTo(ul);
			});
		}

	});

})(jQuery);