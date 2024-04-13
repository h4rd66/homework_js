'use strict'

function pad(str, char, length, start) {
    if (str.length >= length) {
        return str;
    }

    const padLength = length - str.length;
    const padStr = char.repeat(Math.ceil(padLength / char.length)).substring(0, padLength);
    
    if (start) {
        return padStr + str;
    } else {
        return str + padStr;
    }
}

console.log(pad('qwerty', '+', 10, true));

console.log(pad('qwerty', '+', 10, false));