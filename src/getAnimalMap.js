/*  A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo.

  Observações técnicas

  Analise o teste unitário para entender os retornos que são esperados para esta função.

  O que será avaliado

  - (x)Sem parâmetros, retorna animais categorizados por localização;
  - ()Sem a opção includeNames especificada, retorna animais categorizados por localização;
  - ()Com a opção includeNames: true especificada, retorna nomes de animais;
  - ()Com a opção sorted: true especificada, retorna nomes de animais ordenados;
  - ()Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea;
  - ()Com a opção sex: 'female' ou sex: 'male' especificada e a opção sorted: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados; */

const { species } = require('../data/zoo_data');

// Cria o objeto dinamicamente, para retornar na função getAnimalMap se caso não tiver parametro
const locationObj = species.reduce((acc, element) => {
  if (!acc[element.location]) {
    acc[element.location] = [];
  }
  acc[element.location].push(element.name);
  return acc;
}, {});

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return locationObj;
  }
}

// COMO RETORNAR A FUNÇÃO DENTRO DO IF???
// console.log(getAnimalMap());
module.exports = getAnimalMap;
