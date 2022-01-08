const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // buscar se todos os animais são da especie 'animal'
  // comparar se as idades são maiores que 'age'
  // retorna true ou false

  const animals = species.find((specie) => specie.name === animal);

  const haveMinimalAge = animals.residents.every((resident) => resident.age > age);

  return haveMinimalAge;
}

module.exports = getAnimalsOlderThan;
