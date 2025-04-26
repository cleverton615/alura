import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;
export function criarItemDaLista() {
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

  inputCheckbox.addEventListener("click", function () {
    //Quando o usuário clica do checked
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through"; //Adiciona um estilo de linha dentro do texto
    } else {
      nomeItem.style.textDecoration = "none"; //Caso o checked seja desmarcado, o texto fica em o style
    }
  });

  containerItemDaLista.appendChild(inputCheckbox); //insere o elemento filho(inputCheckbox) no elemento pai (containerItemDaLista)
  containerItemDaLista.appendChild(nomeItem); // insere o elemento filho(nomeItem) no elemento pai (containerItemDaLista)
  itemDaLista.appendChild(containerItemDaLista); //insere o elemento filho (containerItemDaLista) no elemento pai (itemDaLista)

  const dataCompleta = gerarDiaDaSemana();

  const itemData = document.createElement("p"); //Cria um elemento do tipo "p" para inserir o novo item
  itemData.innerText = dataCompleta; //Altera o item para o texto da dataCompleta
  itemData.classList.add("texto-data"); //Adiciona a lista de estilo
  itemDaLista.appendChild(itemData); //Insere a "dataCompleta" dentro do objeto pai "itemDaLista"

  return itemDaLista;
}