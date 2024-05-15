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

//Arrays
// const friends = ['Prince', 'Setu', 'Harshit', 'Ashish'];
// console.log(friends);
// console.log(friends[friends.length - 1]);
// friends[3] = ['Jay'];
// console.log(friends[friends.length - 1]);
// /*
// const roll = new Array(5, 41, 26, 28);       //This is correct
// console.log(roll);
// roll[3] = (12);
// console.log(roll);

// const roll = Array(5, 41, 26, 28);      //This is also correct
// console.log(roll);
// roll[3] = (12);
// console.log(roll);

/*
const firstName = 'Ankit';
const details = [firstName, 'Bharti', 2024 - 1947, 'years', friends];
console.log(details);
console.log(details.length);

function calcAge(birthYear) {
    return 2030 - birthYear;
}

const dOb = [2000, 1991, 2002, 1945];
const age1 = calcAge(dOb[0]);
const age2 = calcAge(dOb[dOb.length - 1]);

const ages = [calcAge(dOb[0]), calcAge(dOb[dOb.length - 1])];
console.log(ages);
*/
/*
const friends = ['Prince', 'Setu', 'Harshit', 'Ashish'];

//Add elements
console.log(friends.length);
const newLength = friends.push('Avinash'); //push function add element in the end.
console.log(friends);
console.log(newLength);

friends.unshift("Unique");    //unshift function add element in the start.
console.log(friends);
const newElement = friends.unshift("Akash");
console.log(friends);
console.log(friends.length);

//Remove elements
const popElement = friends.pop();
console.log(friends);
console.log(popElement); //Returns the removed element

const popped = friends.shift();     //shift function remove element from the start.
console.log(friends);
console.log(popped);   //Returns the removed element

console.log(friends.indexOf('Harshit'));    //.indexOf to find the index of any element.
console.log(friends.includes('Rahul')); //.includes returnes boolean if element is present or not.
console.log(friends.includes("Ashish"));

friends.push(13);
console.log(friends);
console.log(friends.indexOf('13'));   //It follows strict equality
console.log(friends.includes(13));    //It follows strict equality

if (friends.includes('Raj')) {
    console.log('You have a friend named Raj.')
} else {
    console.log("You don't have any friend named Raj");
}
*/

// Objects
/*
const details = {
    firstName: 'Ankit',
    lastName: 'Bharti',
    age: 2024 - 1900,
    degree: 'BCA',
    secret11: 'hello',
    friends: ['Harsh', 'Unique', 'Akash']
};
//Access element from object
//Using dot Notation
const detail = 'firstName';
const deg = 'deg';
console.log(details);
console.log(details.degree);

//Using Bracket Notation
console.log(details['age']);
//(+)-> we can use expression in bracket notation
console.log(details[deg + 'ree']);  //can also use concate expression
console.log(details['secret' + (12 - 1)]);

const wantsToknow = prompt('What do you want to know about Ankit? Choose between firstName, lastName, age, degree, secret11, or friends');
// console.log(details.wantsToknow); //details don't have any property called 'wantsToknow' so, we can't use dot notation

if (details[wantsToknow]) {
    console.log(details[wantsToknow]);
} else {
    console.log('Wrong request!.Choose between firstName, lastName, age, degree, secret11, or friends');
}

//Inserting element using those notation
details.home = 'Patna';
details['bestfriend'] = 'myself';
console.log(details);

//Challenge
console.log(`${details.firstName} has ${details.friends.length} friends, and his best friend is called ${details.friends[1]}`);
*/
/*
const details = {
    firstName: 'Ankit',
    lastName: 'Bharti',
    birthYear: 1990,
    degree: 'BCA',
    friends: ['Harsh', 'Unique', 'Akash'],
    inGoodCollege: false,

    // calcAge: function () {   //When we have to call it many times, this computation will be done that times.so,instead we will store it in a new property.
    //     console.log(this);
    //     return 2024 - this.birthYear; //this reference to the object.
    // }
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    challenge: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old pursuing ${details.degree} , and he is ${this.inGoodCollege ? 'in' : 'not in'} good College.`
    },
};

console.log(details.calcAge());

console.log(details.age);
console.log(details.age);
console.log(details.age);
// console.log(this);

// console.log(!!"false");

//Challenge
// if (details.inGoodCollege == true) {
//     console.log(a);
// }
// else { console.log(not) };
console.log(`${details.firstName} is a ${details.age}-year old pursuing ${details.degree} , and he is ${details.inGoodCollege ? 'in' : 'not in'} good College.`);
console.log(details.challenge());
*/

//LOOP
/*
const arr = [
    'Harshit',
    'Ranjan',
    2024 - 2002,
    'business-man',
    ['Rounak', 'Patha', 'Lali', 'Hararara'],
];
const emptyArr = [];

for (let i = 0; i < arr.length; i++) {
    // if ([i] == 1) {
    //     continue;
    // }
    console.log(arr[i], typeof (arr[i]));

    //Fiiling arrays
    // emptyArr[i] = typeof arr[i];
    emptyArr.push(typeof arr[i]);
}

console.log(emptyArr);

const dob = [1990, 1947, 2000, 2003];
const currentAge = [];
for (let i = 0; i < dob.length; i++) {
    // currentAge[i] = 2024 - dob[i];
    currentAge.push(2024 - dob[i]);
}
console.log(currentAge);

//while loop
let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}
*/

//without any counter variable
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}