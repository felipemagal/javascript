//let é usado para variáveis que em algum momento podem mudar seu valor. Como a idade de uma pessoa.

let age = 30;
age = 31;

//const é usado para variáveis que não podem mudar. Como o ano de nascimento de uma pessoa. A linha 9 do exemplo abaixo está errada.

const birthYear = 1994;
birthYear = 1995;

// Quando usamos const, precisamos basicamente de um valor inicial. O exemplo abaixo também está errado. O exemplo correto seria assim - "const job = "coder""

const job;

// Atualmente não é recomendando que se use a declaração var. Mas para efeitos práticos, basicamente, var e let tem a mesma função.

var job = 'programmer';
console.log(job);

job = 'student';
console.log(job);

lastName = 'Sousa';
console.log(lastName);