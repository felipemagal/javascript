// LOOPING BACKWARDS

const felipe = [
    'Felipe',
    'Magalhães',
    2037 - 1994,
    'student',
    ['Dani', 'Toscano', 'Henrique']
];

// LOOPS IN LOOPS

for (let i = felipe.length - 1; i >= 0; i--) {
    console.log(i, felipe[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`--------Exercise ${exercise}: Lifting weight repetition ${rep}🏋️‍♂️`);
    }
}