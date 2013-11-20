// desenvolvendo o controller "RecomendacaoController"

// "$http" é usado para fazer requisições ajax
function RecomendacaoController($scope, $http) {
	$http
	.jsonp("http://mirrorfashion.caelum.com.br/produtos?callback=JSON_CALLBACK")
	.success(function(retorno) {
		$scope.produtos = retorno.produtos;
	});
}

// desenvolvendo o controller "ProdutoController" para alimentar
// a lista de "li" e usar o arquivo txt com baseado

function ProdutoController($scope) {
	"use strict";

	var produtos = [];

	var produto1 = {
	  	id : 1,
	  	codigo: "#00AMT01",
	  	nome : "FURLAN MISTERY CARDIGAN",
	  	imagem: "img/produto-1.jpg",
	  	preco: 120.00,
	  	quantidade: 1
	};

	var produto2 = {
	  	id : 2,
	  	codigo: "#00AMT02",
	  	nome : "ASOS MARITAL COLLAR CARDIGAN",
	  	imagem : "img/produto-2.jpg",
	  	preco : 74.00,
	  	quantidade: 1
	};

	var produto3 = {
	  	id : 3,
	  	codigo: "#00AMT03",
	  	nome : "AOS MERINO SHAWL COLLAR CARDIGAN",
	  	imagem : "img/produto-3.jpg",
	  	preco : 109.00,
	  	quantidade: 1
	};

	produtos.push(produto1);
	produtos.push(produto2);
	produtos.push(produto3);

	// add no obj "$scope"
	$scope.produtos = produtos;
}