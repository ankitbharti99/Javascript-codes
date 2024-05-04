// let a = "ankit";
// if (a == "ankit") alert("Javascript is fun");
/*
console.log(40 + 23 + 8 - 20);
console.log('Ankit');
console.log('21');

let ankit = true;
console.log(ankit);
console.log(typeof ankit);
console.log(typeof 'bharti');
console.log(typeof a);
console.log(typeof null);

// let j;
console.log(typeof 11);

j = 'a';
console.log(typeof j);

ankit = 21;
console.log(ankit);

ankit = 23;
console.log(ankit);

console.log(3 ** 2); // 2**3 means 2 to the power of 3 (2*2*2 = 8)

const firstName = 'Ankit';
const lastName = 'Bharti';
console.log(firstName + ' ' + lastName);
*/
/*
let x = 10 + 5;
x = x + 10;
let y = 20;
console.log(x);

console.log(y > x);
*/
/*
let d, e;
d = e = 25 - 10 - 5;
console.log(d, e);

const firstName = 'Ankit';
const lastName = 'Bharti';
const job = 'Student';
const currentYear = '2024';
const birthYear = '2002';

// 1st method for concatenate strings.
const myInfo = "I'm " + firstName + ' ' + lastName + ' a ' + (currentYear - birthYear) + ' year old ' + job + '!';
console.log(myInfo);

// 2nd method for concatenate strings.
const myInfonew = `I'm ${firstName} ${lastName} a ${currentYear - birthYear} year old ${job}!`
console.log(myInfonew);

// 1st method for next line
const info = "My name \n is Ankit";
console.log(info);

// 2nd method for next line
const infoNew = `My age is
22`;
console.log(infoNew);
*/
/*
const myage = 19;
// const isPossible = myage >= 18;

if (myage >= 18) {
    console.log('The candidate is eligible for Voter ID');
}
else {
    const canVoteAfter = 18 - myage;
    console.log(`The candidate will be eligible for Voter ID after ${canVoteAfter} years👆.`);
}
*/

//Type conversion or Manual Conversion
const myAge = '21'; //A string so for changing into number...
console.log(typeof myAge);
console.log(myAge + 18);
console.log(`My age after 18 yrs ${myAge + 18}`);

console.log(Number(myAge) + 18) //A written, myage behaves like
// number only while using --> Number(myAge)  <--
console.log(`Age after 18 years ${Number(myAge) + 18}`);

console.log(typeof Number(myAge));

const num = 12;
console.log(typeof num);

console.log(typeof String(num));
console.log(typeof Boolean(num));

const myName = 'Aditya';
console.log(Number('Aditya')); //The output will be NaN (Not a number) bcoz this string 
// really don't have a number in it so it is not changeable.
console.log(typeof NaN);

//Type Coercion or automatically conversion
console.log('My age is ' + 12); //Here, + operator that we used here triggers a coercion to strings
// So whenever there is an operation between a string and the number, the number will
//be convertes to a string.
console.log('My age is ' + '12'); // This is also the same as line:106.

console.log('12' - '5' - '2');
console.log('22' > '9'); //false
console.log(22 > 9); //true
console.log('23' > '18'); //true
console.log(23 > 18); //true
console.log('12' * '9'); //this works but...
console.log('12' + '5'); //not this because + operator triggers concatenate strins.

const n = '1';
const numAt = n.charCodeAt(0);
console.log(numAt);

// == and ===
const firstDigit = '1';
const secDigit = 1;
if ((firstDigit == secDigit) == true) {             // '==' --> loose equality
    console.log("Same same but different🥲")    // can be '1' == 1
}
else {
    console.log("Not same")
}

if (firstDigit === secDigit) {           //'===' --> tightly equality
    console.log("Completely same")        // can be 1 === 1
}
else {
    console.log("Not completely same")
}
// != and !== --> loosely not equal and tightly equal.

const age = 19;
if (age >= 18) {
    console.log('can apply for Voter ID');
}
else {
    console.log('cannot apply for Voter ID');
}
/*
console.log(`Harshit age is ${age} so he is ${if (age >= 18) {
    console.log('Eligible for Voter ID');
}
else {
    console.log('Not Eligible for Voter ID');
}}`)
*/                                       //It gives an error...

const voterID = age >= 18 ? 'can apply for Voter ID.' : 'cannot apply for voter ID';
console.log(voterID);

console.log(`Harshit age is ${age} so he ${age >= 18 ? 'can apply for Voter ID.' : 'cannot apply for voter ID'}`); //But not this...