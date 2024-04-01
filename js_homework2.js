'use strict'

let year = prompt ("Будь ласка, введіть рік:");

if (!isNaN (year) && year >= 0) {
    
    if (year === 1 || (year % 10 === 1 && year % 100 !== 11)) {
        alert(year + " рік");
    } else if (year > 1 && year < 5 || (year % 10 > 1 && year % 10 < 5 && (year % 100 < 10 || year % 100 >= 20))) {
        alert(year + " роки");
    } else {
        alert(year + " років");
    }
}
