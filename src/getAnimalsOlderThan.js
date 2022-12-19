const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAllAnimals = species.find((specie) => specie.name === animal);

  const haveMinimalAge = getAllAnimals.residents.every((resident) => resident.age > age);

  return haveMinimalAge;
}

module.exports = getAnimalsOlderThan;
