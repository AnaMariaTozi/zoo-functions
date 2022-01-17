/* 10. Implemente a função getEmployeesCoverage
Esta função será responsável por associar informações de cobertura das pessoas funcionárias.

A cobertura deverá ser representada por um objeto com as seguintes propriedades:

{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
  "fullName": "Sharonda Spry", // nome completo: firstName + lastName
  "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
  "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
} */

const { employees, species } = require('../data/zoo_data');

function getEmployees() {
  const funcionario = employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.filter((specie) => employee.responsibleFor.includes(specie.id))
      .map((animal) => animal.name),
    locations: species.filter((animal) => employee.responsibleFor.includes(animal.id))
      .map((localizacao) => localizacao.location),
  }));
  return funcionario;
}

function getEmployeesCoverage(employee) {
  if (!employee) return getEmployees();

  const procuraFuncionario = employees.find((idEmployee) => idEmployee.firstName === employee.name
  || idEmployee.lastName === employee.name
  || idEmployee.id === employee.id);

  if (!procuraFuncionario) throw new Error('Informações inválidas');

  return getEmployees().find((elemento) => elemento.id === procuraFuncionario.id);
}
module.exports = getEmployeesCoverage;
