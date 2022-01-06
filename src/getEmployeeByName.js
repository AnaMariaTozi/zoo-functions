const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    const empty = {};
    return empty;
  }

  const funcionarios = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return funcionarios;
}

module.exports = getEmployeeByName;
