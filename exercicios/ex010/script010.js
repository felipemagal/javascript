const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course sttruture');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code exemples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Pla course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepere theory videos');
} else if (day === 'wednesday' || day === 'thursday');
{
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}
