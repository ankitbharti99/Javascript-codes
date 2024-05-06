// const bill = 275;
// const bill = 40;
const bill = 430;

const combinedBill = (bill >= 50) && (bill <= 300) ? bill + (bill * 15 / 100) : bill + (bill * 20 / 100);
console.log(`${combinedBill}`);