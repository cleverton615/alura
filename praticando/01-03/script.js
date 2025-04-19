const input = document.getElementById("input-item");
const button = document.getElementById("adicionar-item");
const listaFilmes = document.getElementById("lista-de-filmes");
let contador = 0;

button.addEventListener("click", function (evento) {
  evento.preventDefault();
  if (input.value === "") {
    alert("Insira um filme!");
    return;
  }
  const lista = document.createElement("li");

  const container = document.createElement("div");
  container.classList.add("lista-item-container");

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.id = "checkbox- " + contador++;

  const itemNome = document.createElement("p");
  itemNome.innerHTML = input.value;

  checkboxInput.addEventListener("click", function () {
    if (checkboxInput.checked) {
      itemNome.style.textDecoration = "line-through";
    } else {
      itemNome.style.textDecoration = "none";
    }
  });

  container.appendChild(checkboxInput);
  container.appendChild(itemNome);
  lista.appendChild(container);

  const semana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
  const data = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });
  const dataCompleta = `${semana} (${data}) às ${hora}`;
  const textoTempo = document.createElement("p");
  textoTempo.innerText = dataCompleta;
  textoTempo.classList.add("texto-data");
  lista.appendChild(textoTempo);

  listaFilmes.appendChild(lista)
});
