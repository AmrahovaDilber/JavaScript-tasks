//!!!!!!!!!!!!!!! LOGICAL OPERATORS!!!!!!!!!!
// TASK1
// Create a function that checks if a given number is between 10 and 20 (inclusive) using logical operators.
function getNumber(number) {
  if (number > 10 && number <= 20) {
    console.log(`${number}is between the 10and 20`);
  } else {
    console.log(`${number} is not in this range`);
  }
}
getNumber(15);
getNumber(30);

//TASK2
//Implement a function that checks if a given string contains both the letter 'a' and the letter 'b'.
function getString(str) {
  if (str.toLowerCase().includes("a" && "b")) {
    console.log(`Yes,${str} includes both "a" and "b"`);
  } else {
    console.log(`No,${str} doesn't include both "a" and "b" `);
  }
}
getString("Porsche");
getString("Banana");

// TASK3
// Implement a program that determines if a triangle with given side lengths is a valid triangle, meaning the sum of the lengths of any two sides must be greater than the length of the third side.

// ARRAY DESTRUCTIRING,Spread Operator,Rest Operator
// Swap Values: Write a function that takes in two variables and swaps their values using array destructuring.
function getValues(a, b) {
  [a, b] = [b, a];
  console.log(a, b);
}
getValues(4, 10);
