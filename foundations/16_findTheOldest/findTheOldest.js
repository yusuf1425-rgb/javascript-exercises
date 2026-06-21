const findTheOldest = function(people) {
    people.sort((personA, personB) => getAge(personA) - getAge(personB));
    return people[people.length - 1];
};

const getAge = function(person){
    if(!person.yearOfDeath){
        const currentYear = new Date().getFullYear();
        return currentYear - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
      },
      {
        name: "Ray",
        yearOfBirth: 1942,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 2941,
      },
    ]

console.log(findTheOldest(people));
    
// Do not edit below this line
module.exports = findTheOldest;
