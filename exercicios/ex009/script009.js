const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // o operador final em JS é representado por &&
console.log(hasDriversLicense || hasGoodVision); // o operador OR em JS é representado por ||
console.log(!hasDriversLicense); // o operador NOT em JS é representado por !

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}