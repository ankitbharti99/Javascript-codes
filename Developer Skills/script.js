// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM 1:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, -13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//- What is temp amplitude? Answer difference b/w highest and lowest temp
//- How to compute max and min temperatures?
//- What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// -How to ignore errors?
//- Find max value in temp array
//- Find min value in temp array
// -Subtract min from () and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2:
// 1) Understanding the problem
// -With 2 arrays, should we implement functionality twice?
// No! Just merge two arrays

// 2) Breaking up into sub-problems
// -How to merge 2 arrays?

const array1 = [11, 1, 221, 10, -9];
const array2 = [91, 13, 21, 0, 9];
const newArray = array1.concat(array2);
console.log(newArray);
