const firstName = "Felipe";
const job = 'coder';
const birthYear = 1991;
const year = 2037;

const felipe = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(felipe);

// Esse é o formato usado hoje para escrever strings sem precisar se preocupar onde colocar os espaços.

const felipeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(felipeNew);

console.log(`Just a regular string...`);

// Esse é o formato antigo para se criar string com várias linha

// console.log('String with \n\
// multiple \n\
// lines');

// Esse é o formato usado hoje para criar string com várias linhas
console.log(`String with
multples
lines`)