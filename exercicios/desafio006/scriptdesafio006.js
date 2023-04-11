// 1
const calcTip = function (bill) {
    return bill <= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
}

// O operador '?' é usado em instruções condicionais e, quando acompanhado de um :, pode funcionar como uma alternativa compacta para instruções do tipo if...else.

// 2
const bills = [125, 555, 44];

// 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; //desta forma conseguimos identificar a posição de cada array

// 4
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, bills, totals);

