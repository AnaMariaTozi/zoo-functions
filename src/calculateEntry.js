const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const counter = { child: 0, adult: 0, senior: 0 };

  entrants.forEach(({ age }) => {
    if (age < 18) counter.child += 1;
    if (age >= 18 && age < 50) counter.adult += 1;
    if (age >= 50) counter.senior += 1;
  });
  return counter;
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) return 0;

  const visitants = countEntrants(entrants);

  const childTotal = visitants.child * prices.child;
  const adultTotal = visitants.adult * prices.adult;
  const seniorTotal = visitants.senior * prices.senior;

  const total = childTotal + adultTotal + seniorTotal;

  return total;
}

module.exports = { calculateEntry, countEntrants };
