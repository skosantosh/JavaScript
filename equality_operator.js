const ageAdult = 18;
if (ageAdult === 18) console.log('You are become an adult. ss');
if (ageAdult == 18) console.log('You are become an adult.ll');

// if we remove Number it convert to String
const favourite = Number( prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23){
    console.log(`Cool ${favourite} is Cool Number!`)
}else if(favourite===7){
    console.log(`${favourite} is also cool number!`)
}else if(favourite===9){
    console.log(`${favourite} is also a cool Number!`)
}else{
    console.log("Numbers are no 23 or 7 or 9!")
}

if (favourite !== 9) console.log(`it is not 9.`)