// No lugar de escrever assim:

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Podemos escrever em forma de Array:
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); /* length é para saber quantos elementos existem em uma array*/
console.log(friends[friends.length - 1]); /* essa ação é feita para descobrir qual o último item da array*/

// Podemos substituir um elemento da array igual o exemplo abaixo que substitui o Peter pelo Jay.

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Felipe';
const felipe = [firstName, 'Magalhães', 2023 - 1994, 'student', friends];
console.log(felipe);
console.log(felipe.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);