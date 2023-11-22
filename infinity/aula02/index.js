// 1) Crie um programa que solicite a base e a altura de um triângulo e calcule a sua área

// const base = prompt("Valor da Base:");
// const altura = prompt("Valor da Altura:");
// const area = (base * altura) / 2;
// alert(`A área do triângulo é ${area}`);

// 2) Crie um programa que solicite 3 notas de um aluno e depois calcule a sua média e exiba uma mensagem personalizada com algum texto concatenado

// const nota1 = Number(prompt("Valor da nota 1:"));
// const nota2 = Number(prompt("Valor da nota 2:"));
// const nota3 = Number(prompt("Valor da nota 3:"));
// const media = (nota1 + nota2 + nota3) / 3;
// alert(`A média do aluno foi ${media}`);

//3) Crie um programa que lê a temperatura em graus Celcius e a converta para graus Fahrenheit F=(c*9/5)+32

// const grausC = Number(prompt("Temperatura em Graus C:"));
// const tempF = (grausC * 9) / 5 + 32;
// alert(`A temperatura em °F é ${tempF}`);

// 4) Faça um programa que solicite o valor de hora de um funcionário, quantas horas ele trabalha no mês e calcule o seu salário. (salário = valor horas x quantidade de horas)

// const horasTrabalhadas = prompt(
//   `Quantas horas o funcionário trabalhou neste mês?`
// );
// const valorPorHoras = prompt(`Digite o valor da hora:`);
// const salario = horasTrabalhadas * valorPorHoras;
// alert(`O salário de Felipe é ${salario} logo ele é rico e bem novin`);

// 7) Leia o DDD da cidade de um usuário e informe se ele é ou não de Fortaleza

function verificarDDDFortaleza(dddUsuario) {
  const dddsFortaleza = ["85"];
  return dddsFortaleza.includes(dddUsuario);
}
const dddUsuario = prompt("Digite o seu telefone:");

if (verificarDDDFortaleza(dddUsuario)) {
  alert("O usuário é de Fortaleza");
} else {
  alert("O usuário não é de Fortaleza");
}
