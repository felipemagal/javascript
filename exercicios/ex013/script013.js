// o modo 'estrito' (strict) nos proíbe de fazer certas coisas e cria erros visíveis

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('Of course! I can drive :D');