const day = 'monday';

switch(day){
    case'monday':
        console.log(`Paln course structure.`);
        console.log('Go to coding meetup');
        break;
    case'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'sunday':
        console.log(`Enjoy!`);
        break;
    default:
        console.log('Not a valid day!')
}