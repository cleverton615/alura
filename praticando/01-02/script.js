//Pego o input e o botão do HTML
const input = document.getElementById("input-item");
const bt_salvar = document.getElementById("button-item");

//Crio um evento de escutar e mostro no console o valor do input
bt_salvar.addEventListener("click", function (evento) {
  evento.preventDefault();
  console.log(input.value);
});
//Cria um novo elemento "div" que será o container para o checkbox:
const checkboxContainer = document.createElement("div");
checkboxContainer.classList.add("container", "checkbox");

//Cria o elemento "input" para o checkbox:
const checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.classList.add("input");

//Gerar ID único para cada checkbox, utilizando uma variável "contador" que é incrementada cada vez que um novo item é adicionado:
let contador = 0;
checkboxInput.id = `checkbox_${++contador}`;

//Insira o "checkboxInput dentro de um label, e adiciona o "label" ao "checkboxContainer":
const checkboxLabel = document.createElement("label");
checkboxLabel.appendChild(checkboxInput);
checkboxContainer.appendChild(checkboxLabel);

//Adiciona o "containerCheckbox" ao elemento principal da lista no DOM:
document.querySelector("#mainListContainer").appendChild(checkboxContainer);