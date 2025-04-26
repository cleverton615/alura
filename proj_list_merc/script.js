import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault(); //evita atualização automatica da tela
  const itemDaLista = criarItemDaLista();
  listaDeCompras.appendChild(itemDaLista); //insere o elemento filho (itemDaLista) no elemento pai (ListaDeCompras)
  verificarListaVazia(listaDeCompras); //Chama a função de lista vazia
});

verificarListaVazia(listaDeCompras);