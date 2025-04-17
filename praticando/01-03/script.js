const inputItem = document.getElementById("input-item");
const listaFilmes = document.getElementById("lista-de-filmes");
const btnItem = document.getElementById("adicionar-item");
let contador = 0;

btnItem.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (inputItem.value === "") {
    alert("Insira algum filme.");
    return;
  }

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox- " + contador++;
  const nomeItem = document.createElement("p");
  nomeItem.innerHTML = inputItem.value;

  inputCheckbox.addEventListener("click", function () {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });

  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);
  itemDaLista.appendChild(containerItemDaLista);

  diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
  data = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });
  const dataCompleta = `${diaDaSemana} (${data} às ${hora})`;

  const itemData = document.createElement("p");
  itemData.innerHTML = dataCompleta;
  itemData.classList.add("texto-data");
  itemDaLista.appendChild(itemData);

  listaFilmes.appendChild(itemDaLista);
});