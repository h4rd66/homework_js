'use strickt'

// /^(?!.*[Aa]).{6,}$/


const regex = /^(?!.*[Aa]).{6,}$/;

const strings = [
    '123456',
    'abcdef',
    '12345',
    'AbCdEfG',
    'qwertyuiop', 
];

strings.forEach(str => {
    if (regex.test(str)) {
        console.log(`Рядок "${str}" валідний`);
    } else {
        console.log(`Рядок "${str}" невалідний`);
    }
});