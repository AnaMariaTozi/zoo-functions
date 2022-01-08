const { employees } = require('../data/zoo_data');

function isManager(id) {
  const theManagers = employees.some((employee1) => employee1.managers
    .find((manager1) => manager1 === id));
  return theManagers;
}

function getRelatedEmployees(managerId) {
  // seu código aqui

  if (isManager(managerId)) {
    const haveIdManager = employees.filter((manager) => manager.managers.includes(managerId));
    const newArr = haveIdManager.map((employee) => `${employee.firstName} ${employee.lastName}`);
    return newArr;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
