function gerarDiaDaSemana(){
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
      }); //Informa o dia da semana atual sem abreviar
      const data = new Date().toLocaleDateString("pt-BR"); //Informa a data atual
      const hora = new Date().toLocaleTimeString("pt-BR", {
        //Informa a hora atual
        hour: "numeric",
        minute: "numeric",
      });
      const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`; //Usando tamplet string para alinhar as variáveis

      return dataCompleta;
}

export default gerarDiaDaSemana; // Por padrão, vai gerar apenas o gerarDiaDaSemana