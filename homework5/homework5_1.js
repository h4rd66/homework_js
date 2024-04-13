'use strict'

const myObject = {
    name: 'John',
    age: 30,
    profession: 'Developer',
    getInfo() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};

myObject.getInfo();

myObject.newProperty = 'Нова властивість!';

myObject.getInfo();

myObject.name = 'Ivan';

myObject.getInfo();
