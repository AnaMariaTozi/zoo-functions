const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }

  const specieById = ids.map((id) => species.find((specie) => specie.id === id));
  return specieById;
}

module.exports = getSpeciesByIds;
