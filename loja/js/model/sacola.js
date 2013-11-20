// criando func "Sacola" que será modelo: uma classe de obj

function Sacola() {
	"use strict";

	var total = 0;

	this.obterTotal = function() {

		return total;

	};

	this.incrementarTotal = function() {

		total++;

	};
}