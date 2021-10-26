'use strict'
// Fuction Declaration
function calcAge01(birthYear){
    return 2000 - birthYear;
}

const age01 =  calcAge01(1950);
console.log(age01);

// Fuction expression
const calsAge02 = function (birthYear){
    return 2000 - birthYear;
}

const age02 = calsAge02(1950);

console.log(age01 , age02);