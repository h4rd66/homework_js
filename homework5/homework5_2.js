'use strict'

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function() {
        let totalPrice = 0;
        for (let service in this) {
            if (!isNaN(parseFloat(this[service]))) {
                totalPrice += parseFloat(this[service]);
            }
        }
        return totalPrice;
    },

    minPrice: function() {
        let minPrice = Infinity;
        for (let service in this) {
            if (!isNaN(parseFloat(this[service])) && parseFloat(this[service]) < minPrice) {
                minPrice = parseFloat(this[service]);
            }
        }
        return minPrice;
    },

    maxPrice: function() {
        let maxPrice = -Infinity;
        for (let service in this) {
            if (!isNaN(parseFloat(this[service])) && parseFloat(this[service]) > maxPrice) {
                maxPrice = parseFloat(this[service]);
            }
        }
        return maxPrice;
    }
};

services['Розбити скло'] = "200 грн";

console.log("Загальна вартість послуг:", services.price());
console.log("Мінімальна вартість послуг:", services.minPrice());
console.log("Максимальна вартість послуг:", services.maxPrice());
