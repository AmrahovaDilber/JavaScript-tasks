//!!!!!!!!!!!!!!! LOGICAL OPERATORS!!!!!!!!!!
// TASK1
// Create a function that checks if a given number is between 10 and 20 (inclusive) using logical operators.
// function getNumber(number) {
//   if (number > 10 && number <= 20) {
//     console.log(`${number}is between the 10and 20`);
//   } else {
//     console.log(`${number} is not in this range`);
//   }
// }
// getNumber(15);
// getNumber(30);

//TASK2
//Implement a function that checks if a given string contains both the letter 'a' and the letter 'b'.
// function getString(str) {
//   if (str.toLowerCase().includes("a" && "b")) {
//     console.log(`Yes,${str} includes both "a" and "b"`);
//   } else {
//     console.log(`No,${str} doesn't include both "a" and "b" `);
//   }
// }
// getString("Porsche");
// getString("Banana");

// TASK3
// Implement a program that determines if a triangle with given side lengths is a valid triangle, meaning the sum of the lengths of any two sides must be greater than the length of the third side.

// ARRAY DESTRUCTIRING,Spread Operator,Rest Operator'
//TASK4
// Swap Values: Write a function that takes in two variables and swaps their values using array destructuring.
// function getValues(a, b) {
//   [a, b] = [b, a];
//   console.log(a, b);
// }
// getValues(4, 10);

// TASK5
// Sum Array Elements: Write a function that takes an array of numbers and returns the sum using array destructuring and the spread operator.
// let sum = 0;
// function getNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(getNumbers([1, 2, 3]));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!FOR AND WHILE LOOPS!!!!!!!!!!!!!!!!!!!!!!

// Factorial: Write a function that calculates the factorial of a given number using a loop.
//TASK6
// let hasil = 1;
// function calcFactorial(number) {
//   for (let i = 1; i <= number; i++) {
//     hasil *= i;
//   }
//   return hasil;
// }

// console.log(calcFactorial(5));

// TASK7
// Sum of Array Elements: Write a function that takes an array of numbers and returns the sum of all the numbers using a loop.
// let sum = 0;
// function calcSum(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(calcSum([1, 2, 3, 4, 5]));

//TASK8
// Reverse Array: Write a function that reverses the elements of an array using a loop.
// function getReverse(arr) {
//   const reversedArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }
//   return reversedArr;
// }

// console.log(getReverse([1, 2, 3]));

//TASK9
//Find Maximum Number: Write a function that finds the maximum number in an array using a loop.
// const calcMax = (arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// };
// console.log(calcMax([1, 2, 3, 4]));

//TASK10
// Palindrome Check: Write a function that checks whether a given string is a palindrome or not using a loop.

//  Task11
// Write a function to find the average of all numbers in an array.
// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const average = sum / arr.length;
//   return average;
// };

// console.log(calcAverage([1, 2, 3, 4])); // Output: 2.5

// STRINGS
// TASK1
// String Reversal: Write a function that takes a string as input and returns a new string with the characters reversed.
// function getString(str) {
//   const reversedString = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString.push(str[i]);
//   }
//   console.log(reversedString);
//   const result = reversedString.join("");
//   console.log(result);
// }
// getString("Porsche");

// TASK2
// String Length: Write a function that takes a string as input and returns the length of the string.
function calcLength(str) {
  return str.length;
}
console.log(calcLength("Porsche"));
