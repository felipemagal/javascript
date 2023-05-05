const felipe = [
    'Felipe',
    'Magalhães',
    2037 - 1994,
    'studant',
    ['Dani', 'Henrique', 'Toscano'],
    true
];

const types = [];

for (let i = 0; i < felipe.length; i++) {
    // leitura da arrey de felipe
    console.log(felipe[i]);

    // Preechendo a arrey do types
    // types[i] = typeof felipe[i];
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue e break
console.log('---ONLY STRINGS---')
for (let i = 0; i < felipe.length; i++) {
    if (typeof felipe[i] !== 'string') continue;

    console.log(felipe[i], typeof felipe[i]);
}

console.log('---BREAK WITH NUMBER')
for (let i = 0; i < felipe.length; i++) {
    if (typeof felipe[i] === 'number') break;

    console.log(felipe[i], typeof felipe[i]);
}
