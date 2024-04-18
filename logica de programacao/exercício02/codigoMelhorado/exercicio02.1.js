var n2 = prompt('digite um número');
n2 = parseFloat(n2);

escreve(n2);

function iniciarCalculo(simbolo) {
    var n1 = document.querySelector('#output').textContent;
    
    var n2 = prompt('Digite outro número');
    n2 = parseFloat(n2);

    var msg = calcular(simbolo, n1, n2);

    escreve(msg)
}

function escreve(mensagem) {
    var output = document.querySelector('#output');
    output.innerHTML = mensagem;
}

function calcular(simbolo, n1, n2) {

    if (simbolo !== '+' && simbolo !== '-' && simbolo !== '*' && simbolo !== '/') {
        

    if (isNaN(n1) || isNaN(n2)) {
        
    }
   
    var numeroCalculado = null

    switch(simbolo) {
        case '+':
            numeroCalculado = n1 + n2
            break;
        case '-':
            numeroCalculado = n1 - n2
            break;
        case '*':
            numeroCalculado = n1 * n2
            break;
        case '/':
            numeroCalculado = n1 / n2
    }
    
    return numeroCalculado;
};