var num1 = Number(prompt("Digite um número"));

escreve()

function escreve() {
    var output = document.querySelector('#output');
    output.innerHTML = num1;
};


function somar() {
    var n = Number(prompt('Digite outro número'));
    num1 += n;
    escreve()
};

function subtrair() {
    var n = Number(prompt('Digite outro número'));
    num1 -= n;
    escreve()
};

function multiplicar() {
    var n = Number(prompt('Digite outro número'));
    num1 *= n;
    escreve()
};

function dividir() {
    var n = Number(prompt('Digite outro número'));
    num1 /= n;
    escreve()
    
}
