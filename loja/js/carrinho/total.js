// calculando o valor total das compras

// vamos referenciar o "formatadorMoeda" como fm
(function(fm){
	"use strict";

	// pegando todos os input da tela
	var inputs = document.querySelectorAll("#carrinho input");

	// iterando os inputs para pegar individualmente cada input
	for(var i = 0; i < inputs.length; i++) {

		// pegar o valores cada vez q for digitado
		inputs[i].addEventListener("keyup", function(event){

			// this é o elemento que sofre o evento
			var input = this;

			// a partir do elemento subir na arvore até o "li"
			var li = input.parentNode.parentNode.parentNode;

			// selecionou os dois "spans" de dentro da li
			var spans = li.querySelectorAll("span");

			// o primeiro span é o valor unitario
			var spanValorUnitario = spans[0];

			// o segundo span é o valor total
			var spanValorTotal = spans[1];

			// fazendo as contas
			// pegando o valor do campo
			var quantidade = input.value;
			var valorUnitario = fm.realParaNumber(spanValorUnitario.textContent);
			var novoTotal = quantidade * valorUnitario;

			// colocando no span o novo valor calculado
			spanValorTotal.textContent = fm.numberParaReal(novoTotal);

		});

	}

})(formatadorMoeda);