const { employees } = require('../data/zoo_data');

function isManager(id) {
  const managers = employees.some((employee1) => employee1.managers
    .find((manager1) => manager1 === id));
  return managers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const haveIdManager = employees.filter((manager) => manager.managers.includes(managerId));
    const employeesRelatedToManager = haveIdManager.map((employee) => `${employee.firstName} ${employee.lastName}`);
    return employeesRelatedToManager;
  }
	
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
