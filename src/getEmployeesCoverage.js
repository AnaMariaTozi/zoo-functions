const { employees, species } = require('../data/zoo_data');

function getEmployees() {
  const employeesInfo = employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.filter((specie) => employee.responsibleFor.includes(specie.id))
      .map((animal) => animal.name),
    locations: species.filter((animal) => employee.responsibleFor.includes(animal.id))
      .map((localizacao) => localizacao.location),
  }));
  return employeesMapInfo;
}

function getEmployeesCoverage(employee) {
  if (!employee) return getEmployees();

  const findEmployee = employees.find((idEmployee) => idEmployee.firstName === employee.name
  || idEmployee.lastName === employee.name
  || idEmployee.id === employee.id);

  if (!findEmployee) throw new Error('Informações inválidas');

  return getEmployees().find((elemento) => elemento.id === findEmployee.id);
}

module.exports = getEmployeesCoverage;
