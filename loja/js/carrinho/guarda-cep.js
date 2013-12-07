// trabalhando com localStorage
// (function(){

	// guardando item digitado no localStorage
	var campoCEP = document.querySelector("#input_cep");
	campoCEP.addEventListener("blur", function (event) {
		localStorage.cepDigitado = this.value;
	});

	// verificando se o ja temos o item no localStorage
	window.addEventListener("load", function (event) {
		if(localStorage.cepDigitado) {
			campoCEP.value = localStorage.cepDigitado;
		}
	});

// })();

