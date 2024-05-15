//Teams --> Dolphins and Koalas

const calcAverage = (a, b, c) => (a + b + c) / 3;
// const avgOfDolphins = calcAverage(44, 23, 71);
// const avgOfKoalas = calcAverage(65, 54, 49);
const avgOfDolphins = calcAverage(85, 54, 41);
const avgOfKoalas = calcAverage(23, 34, 27);
console.log(avgOfDolphins, avgOfKoalas);

function checkWinner(avgOfDolphins, avgOfKoalas) {
    if (avgOfDolphins >= 2 * avgOfKoalas) {
        console.log(`Dolphins win ${avgOfDolphins} vs ${avgOfKoalas}`);
        // return;
    }
    else if (avgOfKoalas >= 2 * avgOfDolphins) {
        console.log(`Koalas win ${avgOfKoalas} vs ${avgOfDolphins}`);
        // return;
    }
    else {
        console.log(`No team wins`);
    }
}

checkWinner(avgOfDolphins, avgOfKoalas);