document.querySelector("#num").addEventListener("change", brasil_api);
lista = new Array();
function brasil_api(numeroDDD){
    let ddd = numeroDDD.target.value
	fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
	.then(res => res.json())
	.then(dados => {
		lista = dados.cities;
		listar();
	});
}

function listar(){
	listaC = document.querySelector('ul');
	listaC.textContent = '';
	lista.forEach(municipio =>{
		linha = document.createElement('li');
		linha.textContent = municipio;
		listaC.append(linha);
	});
}