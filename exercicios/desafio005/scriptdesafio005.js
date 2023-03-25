const calcAvarege = (a, b, c) => (a + b + c) / 3;
console.log(calcAvarege(50, 50, 65));


// TEST 1

let scoreDolphins = calcAvarege(44, 23, 71);
let scoreKoalas = calcAvarege(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// TEST 2

scoreDolphins = calcAvarege(85, 54, 41);
scoreKoalas = calcAvarege(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);