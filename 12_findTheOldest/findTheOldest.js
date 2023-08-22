const findTheOldest = function(people) {
  let oldest;
  let maxAge = 0;
  let currentYear = new Date().getFullYear();

  for (person of people) {
    let age;

    if (!person.yearOfDeath) {
      age = currentYear - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }

    if (age > maxAge) {
      maxAge = age;
      oldest = person;
    }
  }

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
