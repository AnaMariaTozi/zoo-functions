const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  //const {species} = data;
  // seu código aqui
  if(!ids){
    const empty = []
    return empty
  } 

  //const espécies = species.find(specie => specie.id === ids) retorna só a primeira posição
  const espécies = ids.map((id) => species.find((specie) => specie.id === id));
  return espécies
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))
module.exports = getSpeciesByIds;
