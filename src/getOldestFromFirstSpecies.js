const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees
    .find((employee) => employee.id === id)

	const firstSpecie = findEmployee.responsibleFor[0];

	const findSpecie = species.find((animal) => animal.id === firstSpecie);

	const oldest = findSpecie.residents.sort((a, b) => b.age - a.age)[0];

	return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
