/*  A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo.

  Observações técnicas

  Analise o teste unitário para entender os retornos que são esperados para esta função.

  O que será avaliado

  - Sem parâmetros, retorna animais categorizados por localização;
  - Sem a opção includeNames especificada, retorna animais categorizados por localização;
  - Com a opção includeNames: true especificada, retorna nomes de animais;
  - Com a opção sorted: true especificada, retorna nomes de animais ordenados;
  - Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea;
  - Com a opção sex: 'female' ou sex: 'male' especificada e a opção sorted: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados; */

const { species } = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui

  function byLocation() {
    const locationObj = species.reduce((regiao, element) => {
      if (regiao[element.location]) {
        regiao[element.location].push(element.name);
        return regiao;
      }
      regiao[element.location] = [element.name];
      return regiao;
    }, {});
    //  console.log('Esse é o objeto de retorno:',locationObj)
    return locationObj;
  }

  if (!options) {
    console.log(byLocation());
  }
}

getAnimalMap();
module.exports = getAnimalMap;
