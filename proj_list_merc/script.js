const inputItem = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault(); //evita atualização automatica da tela
    if (inputItem.value === "") {//Se o input do item for igual a vazio
        alert("Por favor, insira um item!");
        return //interrompe a função
    }
    
    const itemDaLista = document.createElement("li"); //Cria um elemento no HTML do tipo definido
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container"); //Acessa a lista de classe e adiciona o elemento
})