'use strict'
//isNaN(NaN);
// function myIsNaN(value) {
//     return value !== value;
// }

// console.log(myIsNaN(NaN)); //true

// console.log(isNaN(undefined)); //true

// console.log(myIsNaN({})); // true


// function isObject(value) {
//     return typeof value === 'object' && value !== null;
// }

// console.log(isObject({})); //true


// function myIsNaN(value) {
//     return value !== value;
// }

// console.log(myIsNaN(true)); //fasle

// console.log(myIsNaN(null)); //fasle

// console.log(myIsNaN(37)); // false

// console.log(myIsNaN("37")); //false

// console.log(myIsNaN("37.37")); //false

// console.log(myIsNaN("37,5")); //false

// console.log(myIsNaN("123ABC")); //false

// function string(value) {
//     return typeof value === 'string' && value !== null;
// }

// console.log(string("37,5")); //true

// console.log(string("123ABC")); //true

// function myIsNaN(value) {
//     return value !== value;
// }

// console.log(myIsNaN("")); //false

// console.log(myIsNaN(" ")); //false

// console.log(myIsNaN(new Date())); //false

// function string(value) {
//     return typeof value === 'string' && value !== null;
// }

// console.log(string(new Date().toString())); //true

// function myIsNaN(value) {
//     return value !== value;
// }

// console.log(myIsNaN([])); //false

// console.log(myIsNaN([1])); //false

// function string(value) {
//     return typeof value === 'string' && value !== null;
// }

// console.log(string([1, 2])); //true