const upload = document.querySelector("#upload");
const imagemPrincial = document.querySelector(".main-imagem");
const nomeImagem = document.querySelector(".container-item-nome");

upload.addEventListener("change", async (event) => {
  const arquivo = event.tager.files[0];

  if (arquivo) {
    try {
      const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
      imagemPrincial.src = conteudoDoArquivo.url;
      nomeImagem.textContent = conteudoDoArquivo.nome;
    } catch (erro) {
      console.error("Erro na leitura do arquivo", eror);
    }
  }
});

function lerConteudoDoArquivo(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onload = () => resolve({ url: leitor.result, nome: arquivo.name });
    leitor.onerror = () => reject(leitor.error);
    leitor.readAsDataURL(arquivo);
  });
}