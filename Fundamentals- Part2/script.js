/*
//function declaration
function price(cost) {
    return cost * 20 / 100;
}
const final1 = price(100);

//function expression
const price2 = function (cost) { //price2 also acting as function
    return cost * 20 / 100;
}
const final2 = price2(200);

//Difference b/w funct declaration & expression is that we can call
// function before declaring it(in funct. declaration) as we can see:-

//function declaration
const final = price(100);

function price(cost) {
    return cost * 20 / 100;
}

console.log(final1, final2, final);
*/

/*
//Arrow Function '=>'
const price3 = cost => cost * 30 / 100;
const final3 = price3(100);
console.log(final3);

const add = (a, b, c) => a + b + c;
const ans = add(3, 4, 1);
console.log(ans);

const calculate = (a, b, c) => {
    const calculation = a + b - c;
    return `Calculation of a+b-c ${a} ${b} & ${c} is ${calculation}`;
}
console.log(calculate(8, 2, 3));
console.log(calculate(2, 4, 3));
*/
/*
//Calling a function from a function
function cutPieces(fruit) {
    return fruit * 2;
}
function foodProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    return `Juice of ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
}
const juice = foodProcessor(2, 3);
console.log(juice);
*/
