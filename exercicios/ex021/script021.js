const felipe = {
    firstName: 'Felipe',
    lastName: 'Magalhães',
    birthYear: 1994,
    job: 'student',
    friends: ['Dani', 'Henrique', 'Toscano'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${felipe.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(felipe.calcAge(1994));
// // console.log(felipe['calcAge'](1994));

console.log(felipe.age);
console.log(felipe.age);
console.log(felipe.age);
console.log(felipe.age);

// Challenge
// "Felipe is a 46 years old teacher, and he has a driver's license"

console.log(felipe.getSummary());
