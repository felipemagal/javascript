// Felipe Magalhães tem 29 anos, pesa 116kg tem 1.85 de altura e seu IMC é de 36
// Felipe Magalhães nasceu em 1994

const nome = "Felipe Magalhães";
const idade = 29;
const peso = 116;
const alturaEmM = 1.85;

let imc = peso / (alturaEmM * alturaEmM);
console.log(imc);

let anoNascimento = 2023 - idade;
console.log(anoNascimento);

console.log(
  `${nome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM}m de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimento}`
);
