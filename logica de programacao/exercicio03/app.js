// function mostrarAreaAlert () {
//     var largura = prompt('Digite um número');
//     largura= parseFloat(largura);

//     var altura = prompt('Digite outro número');
//     altura = parseFloat(altura);
//     try {
//         var area = calcularArea(largura, altura)
//     } catch(e) {
//         area = e;
//     }
//     alert(`a área total é ${area}`)
// };

//     function mostrarAreaOutput() {
//     var largura = prompt('Digite um número');
//     largura= parseFloat(largura);

//     var altura = prompt('Digite outro número');
//     altura = parseFloat(altura);
//     try {

//         var area = calcularArea(largura, altura)
//     } catch(e) {
//         area = e;
//     }

//     document.querySelector('#output').innerHTML = `a área total é ${area}`
// }

// mostrarAreaAlert()

// function calcularArea (l, a) {
//     if(l === undefined || a === undefined) {
//         throw new Error("Calcular área precisa receber 2 números");
//     }
//     if(isNaN(l) || isNaN(a)) {
//         throw new Error('apenas números')
//     }
//     return l * a;
// }


function mostrarAreaAlert() {
    var altura = prompt('Digite um número')
    altura = parseFloat(altura);

    var largura = prompt('Digite um número')
    largura = parseFloat(largura);
    try{

        var area = calcularArea(altura, largura)
    } catch(e){
        area = e;
    }

    alert(`A área total é ${area}`)
}

function mostrarAreaOutput() {
    var altura = prompt('Digite um número')
    altura = parseFloat(altura)

    var largura = prompt('Digite um número')
    largura = parseFloat(largura)

    try {

        var area = calcularArea(altura, largura);
    } catch(e){
        area = e;
    }

    document.querySelector('#output').innerHTML = `a área total é ${area}`
}

function calcularArea(l,a) {
    if(l === undefined || a === undefined)
    throw new Error('Calcular a área precisa receber 2 números');
    if(isNaN(a) || isNaN(l)) {
        throw new Error('Apenas números')
    }
    return a*l;
}

mostrarAreaAlert()