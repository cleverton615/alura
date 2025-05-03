function filtrarGatosPorCor(listaDeGatos, corDesejada) {
  return listaDeGatos.filter((gato) => gato.cor === corDesejada);
}

let listaDeGatos = [
  { nome: "Garfield", cor: "laranja" },
  { nome: "Whiskers", cor: "preto" },
  { nome: "Mittens", cor: "laranaja" },
  { nome: "Snowball", cor: "branco" },
];

let gatosLaranja = filtrarGatosPorCor(listaDeGatos, "laranja");
console.log(gatosLaranja);

// Saída esperada: [{ nome: 'Garfield', cor: 'laranja' }, { nome: 'Mittens', cor: 'laranja' }]