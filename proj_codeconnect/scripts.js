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