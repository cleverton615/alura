//Captura os elementos
const input = document.getElementById("input_item")
const btnAdd = document.getElementById("adicioanr_Button")
const listaFilmes = document.getElementById("lista_de_filmes")

function adicionarFilme(){
  const input_vl = input.value; //Captura o valor de input
  const lista = document.createElement("li"); //Cria um elemento do tipo "li"
  lista.textContent = input_vl //Insere o valor do "input" no elemento "li"
  listaFilmes.appendChild(lista); //Adiciona os itens na lista
  input.value = ""; //Garante que ao ser adicionado a lista, o input fique vazio
}

btnAdd.addEventListener("click", adicionarFilme);