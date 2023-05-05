const friends = ['Michael', 'Steven', 'Peter'];

// Adciona elementos
// const newLength = friends.push('Jay');
friends.push('Jay');
console.log(friends);

friends.unshift('John');
console.log(friends);

// Remover elementos
friends.pop(); //último elemento
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //primeiro elemento
console.log(friends);

console.log(friends.indexOf('Steven')); // é usado para saber em que posição o elemento está na array
console.log(friends.indexOf('Bob')); //é usado para verificar se o existe o elemento na array

// Usado para verificar se a array é falsa ou verdadaira
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

// ex

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}