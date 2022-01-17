const { species } = require('../data/zoo_data');

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
  const animalsByASex = numberOfAnimals.residents.filter((item) => item.sex === animal.sex).length;
  return animalsByASex;
}

module.exports = countAnimals;
