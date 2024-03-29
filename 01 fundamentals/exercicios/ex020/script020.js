const felipe = {
    firstName: 'Felipe',
    lastName: 'Magalhães',
    age: 2023 - 1994,
    job: 'student',
    friends: ['Dani', 'Henrique', 'Toscano']
};
console.log(felipe);

console.log(felipe.lastName);
console.log(felipe['lastName']);

const nameKey = 'Name';
console.log(felipe['first' + nameKey]);
console.log(felipe['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Felipe? Choose between firstName, lastName, age, job, location and friends');


if (felipe[interestedIn]) {
    console.log(felipe[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, location and friends')
}

felipe.location = 'Brazil';
felipe['twitter'] = '@protegidodaKGB';
console.log(felipe)

// // Desafio
// "Felipe has 3 friends, and his best friend is called Dani"
console.log(`${felipe.firstName} has ${felipe.friends.length} friends, and his best friends is called ${felipe.friends[0]}`);