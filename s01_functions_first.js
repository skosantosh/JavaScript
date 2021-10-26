'use strict';
function login(){
    console.log('My name is Sandal');
}

// Function are use for calling, running, invoking functions
login();


//const interface ='Audio'; // if this not commet it wil give error because it is reserve word.

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}
     oranges.`;
return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 2));

const appleOrangeJuice = (fruitProcessor(5,3));
console.log(appleOrangeJuice);

