// Definindo nosso primeiro controller para usar com angular

// o nome desta funcção foi definida no body da nossa view
// o obj "$scope" injeta a depência para o "SacolaController" e faz a mágica acontecer

function SacolaController($scope) {
	"use strict";

	$scope.sacola = new Sacola();

	$scope.comprar = function() {
		$scope.sacola.incrementarTotal();
	};

}