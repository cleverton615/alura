const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras) {
  const itensDaLista = listaDeCompras.querySelectorAll("li"); //Seleciona toda a lista e insere em itensDaLista
  if (itensDaLista.length === 0) { //Verifica se a lista está vazia
    mensagemListaVazia.style.display = "block"; //Se estiver vazia, mantém a mensagem
  } else {
    mensagemListaVazia.style.display = "none"; //Se estiver com item, tira a mensagem
  }
}

export default verificarListaVazia;