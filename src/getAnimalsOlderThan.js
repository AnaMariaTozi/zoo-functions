const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => specie.name === animal);

  const haveMinimalAge = animals.residents.every((resident) => resident.age > age);

  return haveMinimalAge;
}

module.exports = getAnimalsOlderThan;
