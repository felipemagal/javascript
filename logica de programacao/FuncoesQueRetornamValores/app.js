function mostrarAreaAlert () {
    var largura = prompt('Digite um número');
    largura= parseFloat(largura);

    var altura = prompt('Digite outro número');
    altura = parseFloat(altura);
    
    var area = calcularArea(largura, altura)
    alert(`a área total é ${area}`)
};

function mostrarAreaOutput() {
    var largura = prompt('Digite um número');
    largura= parseFloat(largura);

    var altura = prompt('Digite outro número');
    altura = parseFloat(altura);
    
    var area = calcularArea(largura, altura)

    document.querySelector('#output').innerHTML = `a área total é ${area}`
}

function calcularArea (l, a) {
    return l * a
}