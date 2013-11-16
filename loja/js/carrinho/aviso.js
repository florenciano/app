// mostrar/ocultar uma div de aviso na pagina
(function(){
	"use strict"

	// definindo os textos do link
	var textoEsconde = "Esconder";
	var textoMostra = "Aviso";

	// criando dinamicamente o link de aviso: conceito JAVASCRIPT NAO OBSTRUTIVO
	var link = document.createElement("a");
	link.textContent = textoEsconde;
	link.id = "linkaviso";
	link.href = "#";

	// pegando a div de aviso
	var aviso = document.querySelector(".aviso");

	// add o evento de click
	link.addEventListener("click", function(event){
		// pega a div de aviso e aplica/retira o css ".invisivel"
		aviso.classList.toggle("invisivel");

		// realizando condicionais para alterar o display do texto
		if(aviso.classList.contains("invisivel")) {
			// alterando o texto do link
			this.textContent = textoMostra;
		} else {
			this.textContent = textoEsconde;
		}

		// cancelando a acao do link
		event.preventDefault();
	});

	// inserindo no DOM o link criado
	// insertBefore recebe dois parametros: novo nó, nó existente
	aviso.parentNode.insertBefore(link, aviso);
})();