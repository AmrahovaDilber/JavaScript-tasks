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
