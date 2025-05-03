






function lerConteudoDoArquivo(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();

    leitor.onload = () => {
      resolve({ resultado: leitor.result, nome: arquivo.name });
    };

    leitor.onerror = () => {
      reject(`Erro na leitura do arquivo: ${arquivo.name}`);
    };

    leitor.readAsDataURL(arquivo);
  });
};