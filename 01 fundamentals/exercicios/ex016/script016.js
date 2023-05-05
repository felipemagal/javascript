// ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirament = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirament = 65 - age;
    // return retirament;
    return `${firstName} retires in ${retirament} years`;
}

console.log(yearsUntilRetirament(1991, 'Felipe'));
console.log(yearsUntilRetirament(1980, 'Dani'));