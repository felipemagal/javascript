//Operadores Matemáticos

const now = 2037;

const ageFelipe = now - 1994;
const ageRenata = now - 1990;
console.log(ageFelipe, ageRenata);

console.log(ageFelipe * 2, ageFelipe / 10, 2 ** 3);
// 2 ** 3 significa que é 2 elevado a 3

const firstName = 'Felipe';
const lastName = 'Magalhães';
// desta forma, o JS unifica as duas variáveis em uma única string. FelipeMagalhães. Para colocar um espaço entre os dois nomes, é necessário criar um espaço dentro da adição, como no exemplo abaixo.
console.log(firstName + ' ' + lastName);

//Operadores de Atribuições
let x = 10 + 5;
x += 10;
x *= 4;
x++; //x = x + 1
x--; //x = x - 1
console.log(x);

// Operadores de Comparação

console.log(ageFelipe > ageRenata); // >, <, >=, <=
console.log(ageFelipe >= 18);

const isFullAge = ageFelipe >= 18;

console.log(now - 1994 < now - 1990);