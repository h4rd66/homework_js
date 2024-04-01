'use strict'

function kilometersToMeters(kilometers) {
    return kilometers * 1000;
}

function hoursToMinutes(hours) {
    return hours * 60;
}

function kilogramsToGrams(kilograms) {
    return kilograms * 1000;
}

function printConversions(unit, value, convertedValue, convertedUnit) {
    console.log(`${value} ${unit} це ${convertedValue} ${convertedUnit}.`);
}

let unit = prompt("Введіть одиницю вимірювання (км, години або кг):").toLowerCase();
let value = parseFloat(prompt("Введіть кількість:"));

switch (unit) {
    case 'км':
        let meters = kilometersToMeters(value);
        printConversions('км', value, meters, 'м');
        break;
    case 'години':
        let minutes = hoursToMinutes(value);
        printConversions('години', value, minutes, 'хв');
        break;
    case 'кг':
        let grams = kilogramsToGrams(value);
        printConversions('кг', value, grams, 'г');
        break;
    default:
        console.log("Введено неправильну одиницю вимірювання.");
}