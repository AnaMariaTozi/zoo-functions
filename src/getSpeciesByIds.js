const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) {
    const empty = [];
    return empty;
  }

  // const espécies = species.find(specie => specie.id === ids) retorna só a primeira posição
  const espécies = ids.map((id) => species.find((specie) => specie.id === id));
  return espécies;
}

module.exports = getSpeciesByIds;
