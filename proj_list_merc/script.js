const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault(); //evita atualização automatica da tela
  if (inputItem.value === "") {
    //Se o input do item for igual a vazio
    alert("Por favor, insira um item!");
    return; //interrompe a função
  }

  const itemDaLista = document.createElement("li"); //Cria um elemento no HTML do tipo definido
  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container"); //Acessa a lista de classe e adiciona o elemento
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox"; //Insere o valor do input
  inputCheckbox.id = "checkbox-" + contador++; //adicionar + 1 ao checkbox
  const nomeItem = document.createElement("p");
  nomeItem.innerHTML = inputItem.value; //Altera o paragráfo pelo digitado no input

  containerItemDaLista.appendChild(inputCheckbox); //insere o elemento filho(inputCheckbox) no elemento pai (containerItemDaLista)
  containerItemDaLista.appendChild(nomeItem); // insere o elemento filho(nomeItem) no elemento pai (containerItemDaLista)
  itemDaLista.appendChild(containerItemDaLista); //insere o elemento filho (containerItemDaLista) no elemento pai (itemDaLista)
  listaDeCompras.appendChild(itemDaLista); //insere o elemento filho (itemDaLista) no elemento pai (ListaDeCompras)

});
