const { species } = require('../data/zoo_data');
/* 5. Implemente a função countAnimals
  Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

  Observações técnicas

Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.
O que será avaliado

Sem parâmetros, retorna as espécies e sua quantidade;
Recebendo como parâmetro um objeto com a chave specie, retorna um número, a quantidade de animais daquela espécie;
Recebendo como parâmetro um objeto com a chave specie e sex, retorna um número, a quantidade de animais daquela espécie, no sexo selecionado. */

function countAnimals(animal) {
  // seu código aqui
  const animals = species.reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {});

  if (!animal) {
    return animals;
  }
  const numberOfAnimals = species.find((element) => element.name === animal.specie);
  if (Object.keys(animal).length === 1) {
    return numberOfAnimals.residents.length;
  }
  const getAnimalsByASex = numberOfAnimals.residents.filter((item) => item.sex === animal.sex).length;
  return getAnimalsByASex;
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));
module.exports = countAnimals;
