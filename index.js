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
