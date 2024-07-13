'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  randomOrder: function (categoryIn, startIn, mainIn) {
    return [
      this.categories[categoryIn],
      this.starterMenu[startIn],
      this.mainMenu[mainIn],
    ];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    mainIndex = -1, //Default values
    time = '00:00', //Default values
    starterIndex = -1, //Default values
    address = XYZ, //Default values
  }) {
    console.log(
      `Order Received! at ${address} at ${time}pm and dishes were ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your pasta is ready with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...optionalIngedient) {
    console.log(mainIngredient);
    console.log(optionalIngedient);
  },
};

console.log(restaurant.order(1, 2));

/* When we have function with alot of parameters then it can be hard to know 
the order of parameters for someone that is using this function. And so instead of
defining the parameters manually we can just pass an object into the function as an argument
and the function will then immediately destructure that object. As we can see here-
function- orderDelivery in restaurant object and passing argument as object.
*/
restaurant.orderDelivery({
  time: '12:30',
  address: 'Sandis stadium, Bhagalpur',
  mainIndex: 1,
  starterIndex: 2,
});

//
// const arr = [0, 12, 2, 4];
// const [a, b, c, d] = arr;
// console.log(arr);
// console.log(a, b, c, d);

let [main, , , secondary] = restaurant.categories;
// console.log(main, secondary);
//let suppose the owner want to change the main category with each other

////////////////////swap or mutate//////////////
// method1
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// method2
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Return more than 2 values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Return more than 3 values from a function
const [category1, starter1, mainCourse1] = restaurant.randomOrder(2, 1, 1);
console.log(category1, starter1, mainCourse1);
// */

/*
/////////////////////////////
// Destructing Arrays
const nested = [4, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = -1, q = -1, r = -1] = [3];
console.log(p, q, r);
*/

///////////////////////////////////
/*
// Destructuring Objects
const { name, mainMenu, openingHours } = restaurant;
console.log(name, mainMenu, openingHours);

const {
  name: restaurantName,
  mainMenu: dishes,
  openingHours: availablity,
} = restaurant;
//we can also change variable name
//will help in dealing with third party data
console.log(restaurantName, dishes, availablity);

// Default values
const { menu = [], starterMenu = [] } = restaurant;
console.log(menu, starterMenu);

//swapping
let a = 1161;
let b = 911;
const obj = { a: 5, b: 2, c: 33 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(open, close);
console.log(o, c);
*/

//////////////SPREAD OPERATOR- "..."/////////////
const arr1 = [4, 7, 2];
console.log(arr1);
// arr1.unshift(2, 3);
const newArr = [7, [1, 6], 8, 9, ...arr1];
console.log(newArr);
console.log(...newArr); //use of spread oper. for writing individual array
// console.log(7, 8, 9, 4, 7, 2);

const newMenu = [...restaurant.mainMenu, 'Idli'];
console.log(newMenu);
/*so, we're building a new array from scratch, and we can see that here by the
square brackets. So this brackets syntax here is simply the way in which we have
always been writing new arrays. And so here, again, we are writing a new array
but simply based on expanding this array, and then adding another element to it.
It might seem that spread operator is actually a bit similar to destructing,
because it also helps us to get elements out of arrays. Now, the big difference
is that the spread operator takes all the elements from the array and it also doesn't
create new variables. And as a consequence, we can only use it in places where we
would otherwise write values seperated by commas.
*/

// const arr2 = [2, 4, 5];
// console.log(...arr1, ...arr2); //merging arrays using spread operator

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //Join 2 or more arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//spread operator works on iterables.
//Iterables: arrays, strings, maps, sets. NOT objects// <---

const firstName = 'Ankit';
const lastName = 'Bharti';
const fullNmae = [...firstName, ...lastName];
console.log(fullNmae);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// console.log(...ingredients);
// 2 methods of passing multiple argument in a function
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients); //using spread operator

// SPREAD, because on RIGHT side of '='
const arr = [2, 3, ...[5, 6, 7]];

//REST, because on LEFT side of '='
const [a, b, ...restElement] = [2, 3, 4, 5, 6];
console.log(a, b, restElement);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//OBJECTS
const { fri, ...workingDays } = restaurant.openingHours;
console.log(workingDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
//can paas single or multiple agument in function at once using rest
add(2, 3);
add(3, 6, 8, 4);
add(3, 56, 89, 4, 12, 9, 5, 2, 8, 7);
add(-2, 6, 4, -2, -10);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('onion', 'mushroom', 'spinach', 'olives');
restaurant.orderPizza('sauce');

/*
// Use ANY data type, return ANY data type, Short-Circuiting.
console.log('--- OR ---');
console.log(3 || 'Ankit');
console.log('' || NaN);
console.log(true || 0);
console.log(null || NaN);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numguests = 23;
const guests1 = restaurant.numguests ? restaurant.numguests : 10;
console.log(guests1);

const guests2 = restaurant.numguests || 10;
console.log(guests2);

console.log('--- AND ---');
console.log(0 && 'Ankit');
console.log(7 && 'Ankit');

console.log('Hello' && 23 && null && 'Ankit');
//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

// NULLISH COALESCING OPERATOR //
restaurant.numguests = 0;
const guests = restaurant.numguests || 10;
console.log(guests);
//while using  OR operator, if the value of any variable is 0 then it considered it as a falsy value
// but, 'Nullish Coalescing Operator' solves this problem.

// Nullish: null and undefined (NOT 0 or '');
const guestCorrect = restaurant.numguests ?? 10;
console.log(guestCorrect);

// Looping Arrays using -- for of loop --
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
