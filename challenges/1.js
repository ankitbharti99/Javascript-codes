// let weightMark = 78;
// let heightMark = 1.69;
// let weightJohn = 92;
// let heightJohn = 1.95;

let weightMark = 95;
let heightMark = 1.88;
let weightJohn = 85;
let heightJohn = 1.76;

var bmiMark = weightMark / heightMark ** 2;
console.log(bmiMark);

var bmiJohn = weightJohn / heightJohn ** 2;
console.log(bmiJohn);

let markHigherBMI = (bmiMark > bmiJohn);
console.log(markHigherBMI);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark} is higher than John's!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's!`);
}