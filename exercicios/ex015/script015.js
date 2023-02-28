// FUNCTION DECLARATION
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}


// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


// A principal diferença entre Declarações de Funções e Expressões de Funções é que podemos realmente chamar as declarações de funções antes de serem definidas no código. Ex.: na linha 2, chamamos primeiro antes de ser definida.