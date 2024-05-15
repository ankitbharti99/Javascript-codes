const bill = 100;

// const combinedBill = (bill >= 50) && (bill <= 300) ? bill + (bill * 15 / 100) : bill + (bill * 20 / 100);
// console.log(`${combinedBill}`);

function calcTip(bill) {
    // if ((bill >= 50) && (bill <= 300)) {
    //     return bill + (bill * 15 / 100)
    // }
    // else {
    //     return bill + (bill * 20 / 100);
    // }
    return (bill >= 50) && (bill <= 300) ? (bill * 15 / 100) : (bill * 20 / 100);
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);