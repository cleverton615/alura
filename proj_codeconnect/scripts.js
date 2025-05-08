const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener("click", () => {
  inputUpload.click();
});

function lerConteudoDoArquivo(arquivo) {
  //Função para receber o arquivo
  return new Promise((resolve, reject) => {
    //Uma promessa representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
    const leitor = new FileReader(); //Iniciando um leitor de arquivo
    leitor.onload = () => {
      //Quando carregar o arquivo
      resolve({ url: leitor.result, nome: arquivo.name }); //Ele retorna o arquivo e o nome
    };

    leitor.onerror = () => {
      //Quando não carrega o arquivo
      reject(`Erro na leitura do arquivo ${arquivo.name}`); //Ele retorna uma mensagem de erro
    };

    leitor.readAsDataURL(arquivo); //Ler o conteúdo do arquivo
  });
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener("change", async (evento) => {
  //Quando o input tiver um mudança
  const arquivo = evento.target.files[0]; //Ele vai entrar dentro do evento, e pegar o arquivo que vai ser enviado

  if (arquivo) {
    try {
      const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
      imagemPrincipal.src = conteudoDoArquivo.url;
      nomeDaImagem.textContent = conteudoDoArquivo.nome;
    } catch (erro) {
      console.error("Erro na leitura do arquivo");
    }
  }
});

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");

inputTags.addEventListener("keypress", (evento) => {
  if (evento.key === "Enter") {
    evento.preventDefault();
    const tagTexto = inputTags.value.trim(); //"trim()" excluir os espaços em branco de antes e depois dos texto
    if (tagTexto !== "") {
      const tagNova = document.createElement("li");
      tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
      listaTags.appendChild(tagNova);
      inputTags.value = "";
    }
  }
});

listaTags.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("remove-tag")) {
    //Aqui seleciona a classe
    const tagQueQueroRemover = evento.target.parentElement; //Aqui informo que será um elemento parente
    listaTags.removeChild(tagQueQueroRemover); //Aqui Remove
  }
});

const tagsDisponiveis = [ //Cria as tags disponiveis
  "Front-end",
  "Back-end",
  "Full-stack",
  "Programação",
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "C++",
  "C#",
  "TypeScript",
  "Java",
  "Data Science",
  "JSON",
  "SQL",
];

async function verificarTagsDisponiveis(tagTexto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tagsDisponiveis.includes(tagTexto));
    }, 1000);
  });
}