const { employees, species } = require('../data/zoo_data');
/* A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

O que será avaliado

Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie. */

// RETORNO ['Maxwell', 'male', 15]

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  // encontra o funcionário chamado no parâmetro
  const findEmployee = employees.find((employee) => employee.id === id);

  // encontra a primeira espécie gerenciada pelo funcionario especificado
  const firstSpecie = findEmployee.responsibleFor[0];

  const findSpecie = species.find((animal) => animal.id === firstSpecie);
  //console.log(findSpecie);

  // encontrar qual é o mais velho entre a especie especificada acima
  const oldest = findSpecie.residents.sort((a,b) => b.age - a.age)[0];
  //const imprime = `${oldest.name} ${oldest.sex} ${oldest.age}`;
  const retorno = [oldest.name, oldest.sex, oldest.age];
  return retorno;
}
console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
