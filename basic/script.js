"use script";

// const myName = "Ankit";

// if (myName === "Ankit") {
// console.log(`Ankit is a  ${job}`);
const age = 2030 - 2000;
// console.log(age);
const job = "painter";
// console.log(x);
// }

// print();
// console.log(print);
// const print = function () {
// const name = "Ankit";
// console.log(name);
// };

// console.log(printValue);
// const printValue = () => "Arrow Function";

// console.log(this);

const myName2 = new String("Ankit");
// console.log(myName2);
// console.log(myName2[3]);
// console.log(myName2.toUpperCase);  **console.log(myName2.toUpperCase); is not calling the toUpperCase method. Instead, it's just referencing the method itself (without parentheses). To call the method and get the uppercase version of the string, you need to use myName2.toUpperCase().
// console.log(myName2.toUpperCase());
// console.log(myName2.__proto__);

const randomNum = new Number(100);
// console.log(randomNum);
// console.log(randomNum.toString());
// console.log(randomNum.toString().length);
// console.log(randomNum.toFixed(5));
// console.log(typeof randomNum);

const balance = 123.8966;
// console.log(balance.toPrecision(5));

const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(Math.floor(Math.random() * 10 + 10));

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 0, 23, 0, 1);
let myCreatedDate = new Date("7-22-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now() / 1000 / 60 / 60));
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// customizable
// console.log(
newDate.toLocaleString("default", {
  weekday: "short",
  month: "long",
  day: "2-digit",
});
// );

//////Array/////
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// console.log(typeof arr);

//(array).join changes array to string
// const newArr = arr.join();
// console.log(newArr);
// console.log(typeof newArr);

/*
//slice, splice
console.log("A", arr);

const newArr = arr.slice(1, 4);
console.log(newArr);
console.log("B", arr);

const newArr2 = arr.splice(1, 4);
console.log(newArr2);
console.log("C", arr);
*/

const anArray = [1, 2, 3, [4, 5, 6], 7, 8, [3, 4, [0, 1, 8]]];
// console.log(anArray);
const anNewArray = anArray.flat(Infinity);
// console.log(anNewArray);

//To check if array or not
// console.log(Array.isArray("Ankit"));
//To convert in Array
// console.log(Array.from("Ankit"));
// console.log(Array.from({ name: "Ankit" })); //Interesting (gives empty array '[]')

let value1 = 100;
let value2 = 200;
let value3 = 300;
// console.log(Array.of(value1, value2, value3));

///////Object///////

const salt = Symbol("key");

const obj = {
  name: "Ankit",
  "full name": "Ankit Bharti",
  [salt]: "mykey", //To refer symbol we have to write it in [].
  age: 18,
  location: "Jamshedpur",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Thursday"],
};
// console.log(obj);

//2 method to call any key value of object
// console.log(obj.age);
// console.log(obj["age"]);
// console.log(obj.full name); //it will show error (bcoz key is written in different format)
// console.log(obj["full name"]); //but not this
// console.log(obj["salt"]); //It will show undefined
// console.log(obj[salt]);

// obj["full name"] = "Ankit Singh";
// Object.freeze(obj);
// //Here, object values are freeze so we can't make any changes after it.
// obj["full name"] = "Ankit Sharma";
// console.log(obj);

/*
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { name: "Batman", location: "Gotham City" };

Method 1--
//Syntax for adding object
// const returnedTarget = Object.assign(target, source);
// all object is going to store in target
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);
const obj5 = Object.assign(obj1, obj2, obj3);
console.log(obj1);

Method 2-- just use spread operator.😂
*/

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Tony Stark";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//print all keys and values of an object
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));

/////Object De-structure
const Heros = {
  teamNmae: "Avengers",
  location: "Avenger's Tower, Newyork",
  teamLeader: "Tony Stark",
  noOfHeros: 9,
};

// Heros.teamLeader;
// Heros.teamLeader; //why to write same long thing again & again
// Heros.teamLeader;

///// instead destructure///////////////////

const { teamLeader: Rich } = Heros;
// console.log(teamLeader);
// console.log(Rich);

////////////////////////////
//// Immediately Invoked Function Expressions (IIFE) ////
// IIFE is used to remove global scope (variables or any thing declared) pollution

(function chai() {
  //named IIFE
  // console.log("Function Invoked");
})();

(() => {
  //unnamed IIFE
  // console.log("Arrow Function Invoked");
})();

////// Nullish Coalescing Operator (??) : only for null undefined /////////////

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

// console.log(val1);

///////////////////////////////////////////

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false'. " ", []. {}, function(){}

//How to check if the object is empty or not
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  // console.log("Object is empty");
}

////////Different loops///////////

// for of loop
const arr = [5, 4, 9, 7, 0, 1];
for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
  if (greet === " ") {
    continue;
  }
  // console.log(`Each char is ${greet}`);
}

/*
Q=> Difference between Map and Set in javascript
Ans=> In Maps, the data is stored as a key-value pair whereas in 
Set data is a single collection of values that are unique.
*/
// Maps
const map = new Map();
map.set("IN", "India");
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

// we CAN'T iterate Map using {for in loop} because it is not iterable.

// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman",
// };
/* we CAN'T iterate through Objects using {for of loop}
   But CAN iterate through Objects using {for in loop}
 for (const [key, value] of myObject) {
   console.log(key, ":-", value);
 }
*/

// for in loop

const shortcut = {
  js: "Javascript",
  cpp: "C++",
  py: "Python",
  kt: "Kotlin",
  rs: "Rust",
  rb: "Ruby",
};

for (const key in shortcut) {
  // console.log(key);
  // console.log(`${key} shortcut is for ${shortcut[key]}`);
}

const programming = ["js", "cpp", "py", "kt", "rs"];
for (const key in programming) {
  // console.log(key); While using for in loop in array it will print array's key(index).
  // console.log(programming[key]);
}

// for each loop
//have to use 'call back function' -> function with no name
const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((val) => {
//   console.log(val);
// });

/*
// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe); //don't have to call function,only give the reference.
*/

//In forEach loop we can access three things.
coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

//////////////////     DOM        //////////////////
const dom_element = document.getElementById("dom_id");

// console.log(dom_element.innerHTML);
// console.log(dom_element.innerText);
// console.log(dom_element.textContent);

document.getElementById("dom_id").setAttribute("dom_class", "title");

// console.log(document.querySelector('input[type = "password"]'));

const my_ul = document.querySelector("ul");
// const turngreen = my_ul.querySelector("li");
// turngreen.style.backgroundColor = "green";

const all_Lists = document.querySelectorAll("li");
//only forEach loop will work in querySelectorAll.
// console.log(all_Lists);
// all_Lists[0].style.color = "green";
// all_Lists[2].style.color = "green";

all_Lists.forEach(function (item) {
  item.style.backgroundColor = "red";
  item.style.textAlign = "center";
});

const tempClassList = document.getElementsByClassName("list-item");
//No any type of array will work on this.
//so, we have to convert it into an Array.

Array.from(tempClassList);

const myConvertedArray = Array.from(tempClassList);
myConvertedArray.forEach(function (li) {
  li.style.color = "yellow";
});

const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children[2].textContent);
