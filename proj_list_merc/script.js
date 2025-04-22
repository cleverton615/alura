import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault(); //evita atualização automatica da tela
  const itemDaLista = criarItemDaLista();
  listaDeCompras.appendChild(itemDaLista); //insere o elemento filho (itemDaLista) no elemento pai (ListaDeCompras)
  verificarListaVazia(); //Chama a função de lista vazia
});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
  const itensDaLista = listaDeCompras.querySelectorAll("li"); //Seleciona toda a lista e insere em itensDaLista
  if (itensDaLista.length === 0) { //Verifica se a lista está vazia
    mensagemListaVazia.style.display = "block"; //Se estiver vazia, mantém a mensagem
  } else {
    mensagemListaVazia.style.display = "none"; //Se estiver com item, tira a mensagem
  }
}

verificarListaVazia();