// permite somente a insercao de numeros nos inputs

// começando com boas praticas e evitando cair no escopo global
(function() {
	"use strict";

	// -- VALIDANDO INPUT QTE --
	// definindo uma regExp para os inputs. condição entre o sinal "/.../"
	var filtro = /[0-9]/;
	// peguei todos os inputs q estao dentro da ul
	var inputs = document.querySelectorAll("#carrinho input");

	// vamos pegar individualmente cada inputs
	for(var i = 0; i < inputs.length; i++) {

		// utilizamos o evento "keypress":
		// evento disparado antes do valor digitado aparecer na tela
		inputs[i].addEventListener("keypress", function(event) {
			// precisamos converter em string o valor digitado "event.charCode"
			// para usar na comparacao do regExp que só aceita numbs
			var digitado = String.fromCharCode(event.charCode);

			// comparando o valor digitado com o regExp
			// usamos a func "test" para avaliar se o conteudo atende o requisito
			// ff considerea "teclas auxiliares" como 0. Chrome sequer dispara o evento
			if(event.charCode && !filtro.test(digitado)) {
				// cancelando a exibição do caractere que não atende nossas condições
				event.preventDefault();
			}
		});

		// -- NAVEGANDO DOM PRA CALCULAR VALOR TOTAL --
		// do "input" ir ate o "li" para procurar todos os "spans"
		var li = inputs[i].parentNode.parentNode.parentNode;
		// procure todos os spans da "li"
		var spans = li.querySelectorAll("span");
		// neste exercicio todos os primeiros spans corresponde ao valor unitario
		var spanValorUnitario = spans[0];
		// neste exercicio todos os segundos spans corresponde ao valor total
		var spanValorTotal = spans[1];

		// mostre na tela
		// console.log(inputs[i].value);
		// console.log(spanValorUnitario.textContent);
		// console.log(spanValorTotal.textContent);
	}

})();

