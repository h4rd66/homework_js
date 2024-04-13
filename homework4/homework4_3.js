'use strict'

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const total = evenCount + oddCount;
    const evenPercentage = (evenCount / total) * 100;
    const oddPercentage = (oddCount / total) * 100;

    return {
        evenCount: evenCount,
        oddCount: oddCount,
        evenPercentage: evenPercentage,
        oddPercentage: oddPercentage
    };
}

const result = checkProbabilityTheory(10000);

console.log(result);