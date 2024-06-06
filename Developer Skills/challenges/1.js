/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with 
the given temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1.  Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2.  Use the problem-solving framework: Understand the problem and break it up into sub-problems!
Test data:
->    Data 1: [17, 21, 23]
->    Data 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
//- How to print single temp with increasing number of days.
// Using string literal inside loop.

// 2) Breaking up into sub-problems
// transform array into string
// Create function
// then use loop for repetitive data
// Make an empty string and string literal for the data
// Now, pass test data

const printForecast = function (arr) {
  let str = ' ';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}"C in ${[i + 1]} days ... `;
  }
  console.log('...' + str);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
