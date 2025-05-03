document.addEventListener("DOMContentLoaded", () => {
  const upload = document.querySelector("#upload");
  const listaDados = document.querySelector("#listaDados");

  upload.addEventListener("change", async (event) => {
    const arquivo = event.target.files[0];
    if (arquivo) {
      try {
        const conteudo = await lerConteudoDoArquivo(arquivo);
        const dados = JSON.parse(conteudo.texto);
        listaDados.innerHTML = "";
        dados.forEach((dado) => {
          const li = document.createElement("li");
          li.textContent = JSON.stringify(dado);
          listaDados.appendChild(li);
        });
      } catch (erro) {
        console.error("Erro na leitura do arquivo", erro);
      }
    }
  });
});

function lerConteudoDoArquivo(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onload = () => resolve({ text: leitor.result });
    leitor.onerror = () => reject(leitor.error);
    leitor.readAsText(arquivo);
  });
}
