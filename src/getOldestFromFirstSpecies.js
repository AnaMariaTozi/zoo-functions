const { employees, species } = require('../data/zoo_data');

// Referencia: muito obrigada ao colega Caio que me ajudou nessa <3
function getOldestFromFirstSpecies(id) {
// seu código aqui

  const findEmployee = employees.find((employee) => employee.id === id);

  const firstSpecie = findEmployee.responsibleFor[0];

  const findSpecie = species.find((animal) => animal.id === firstSpecie);

  // encontrar qual é o mais velho entre a especie especificada acima
  const oldest = findSpecie.residents.sort((a, b) => b.age - a.age)[0];
  const retorno = [oldest.name, oldest.sex, oldest.age];
  return retorno;
}

module.exports = getOldestFromFirstSpecies;
