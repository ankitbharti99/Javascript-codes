const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    return (bill >= 50) && (bill <= 300) ? (bill * 15 / 100) : (bill * 20 / 100);
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + calcTip(bills[i]));
}
console.log(bills, tips, totals);

//Bonus
let sum = 0;
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
    return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));