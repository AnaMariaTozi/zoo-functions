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

module.exports = getAnimalMap;
