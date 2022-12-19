const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
	if (!employeeName) {
		return {}
	};

	const employeesByName = employees.find((employee) =>
		employee.firstName === employeeName || employee.lastName === employeeName);
	return employeesByName;
}

module.exports = getEmployeeByName;
