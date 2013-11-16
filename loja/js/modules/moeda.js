// todos os nosso módulos que podem ser [e serão] reutilizados
var formatadorMoeda = (function() {
	"use strict";

	var simbolo = "R$ ";
	var retorno = {};

	retorno.realParaNumber = function(real) {
		return parseFloat(real.replace(simbolo, "").replace(",", "."));
	};

	retorno.numberParaReal = function(number) {
		return simbolo + number.toFixed(2).replace(".", ",");
	};

	return retorno;
})();
