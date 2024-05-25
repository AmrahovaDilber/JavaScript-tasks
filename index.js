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
// function calcLength(str) {
//   return str.length;
// }
// console.log(calcLength("Porsche"));

//TASK3
// String Palindrome: Write a function that takes a string as input and returns true if the string is a palindrome, false otherwise.
// const isPalindrome = (str) => {
//   const reversedArr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedArr.push(str[i]);
//   }
//   console.log(reversedArr);
//   const result = reversedArr.join("");
//   if (str === result) {
//     console.log("Str is palindrome");
//   } else {
//     console.log("Str is not pal  indrone");
//   }
// };

// isPalindrome("Porsche");
// isPalindrome("radar");

// TASK4 String Capitalization: Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.
// const getString = (str) => {
//   for (let i = 0; i < str.length; i++) {}
// };

//TASK Create an array of integers with the values 1 to 10. Print each element of the array.
// let arr = [1, 23, 4, 5, 6, 7];
// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }

//TASK Array Manipulation:
// Write a function that takes an array and returns a new array with each element squared.
// function calcSquared(arr) {
//   return arr.map(num=>num*num)
// }

// console.log(calcSquared([1,2,3,4,5]))

//TASK Write a function to find the sum of all elements in an array of integers.
// function calcSum(arr) {
//   let sum = 0;
//   arr.forEach(num => {
//     sum += num;
//   });
//   return sum;
// }

// console.log(calcSum([1, 2, 3, 4]));

//TASK Sum of Elements:
// Write a function to find the sum of all elements in an array of integers.
// function calcSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(calcSum([1,2,3,4,5]))

// let numbers = [1, 2, 3, 4, 5]
// for (number of numbers) {
//   console.log(number)
// }

//TASK BUTUN MEYVE ADLARINI BOYUK HERFLE YAZDIRIN
// const new_arr=[]
// let fruits = ["alma", "armud", "banan", "ciyelek"];
// for (let i = 0; i < fruits.length; i++){
//   const result = fruits[i].toUpperCase();
//   new_arr.push(result)
// }
// console.log(new_arr)

//TASK BUTUN MEYVE ADLARINDA a HerFI KECEN MEYVE OLDUGUNU TAPIN
// let sum = 0;
// for (let i = 0; i < fruits.length; i++){
//   if (fruits[i].includes("a")) {
//     sum+=1
//   }
// }
// console.log(sum)

//

// let students = [
//   {
//     name: "Orxan",
//     surname: "Abbasov",
//     scores: [60, 70, 80],
//   },
//   {
//     name: "Kenan",
//     surname: "Zeynalov",
//     scores: [74, 83, 89],
//   },
//   {
//     name: "Fərid",
//     surname: "İsmayılov",
//     scores: [78, 81, 94],
//   },
// ];

// for (let i = 0; i < students.length; i++) {
//   let point = students[i].scores;
//   let sum = 0;
//   for (let j = 0; j < point.length; j++) {
//     sum += point[j];
//   }
//   const ortalama = sum / point.length;
//   console.log(`${students[i].name} ${students[i].surname} - Ortalama: ${ortalama}`);

// }

//TASK  Write a function that takes a string and returns it reversed.
// function getString(str) {
//   let my_arr = [];
//   const new_str = str.split("");
//   for (let i = new_str.length - 1; i >= 0; i--) {
//     my_arr.push(new_str[i]);
//   }
//   const reversersedArr = my_arr.join("");
//   console.log(reversersedArr);
// }
// getString("porsche");



//TASK Check if the string is Palindrome or not
// function isPalindrome(str) {
//     const reversedStr = str.split("").reverse().join("");
//     console.log(reversedStr);
//     if (str === reversedStr) {
//       console.log("Yes, string is a palindrome");
//     } else {
//       console.log("No, string is not a palindrome");
//     }
//   }

//   isPalindrome("racecar");



//TASK Write a function that finds the largest number in an array.
// const my_arr=[12,3,4,5,30,34]
// function calcLargest(arr) {
//     let max_eded=arr[0]
//     for (let i = 0; i < my_arr.length; i++){
//         if (max_eded < arr[i]) {
//             max_eded=arr[i]
//         }
//     }
//     return max_eded
// }
// console.log(calcLargest(my_arr))




//TASK Anagram Check:
// Write a function to check if two strings are anagrams.
// Example: "listen" and "silent" → true, "hello" and "world" → false4
// function isAnagram(str1, str2) {
//   const my_str1 = str1.split("").sort().join();
//   const my_str2 = str2.split("").sort().join();
//   if (my_str1.length !== my_str2.length) {
//     return false;
//   }
//   if (my_str1 === my_str2) {
//     return "Yes they are anagram";
//   } else {
//     return "No,they are not anagram";
//   }
// }

// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("hello", "world"));
// console.log(isAnagram("Dilber", "Porsche"));




//TASK
// Merge Sorted Arrays:
// Write a function that merges two sorted arrays into a single sorted array.
// Example: [1, 3, 5] and [2, 4, 6] → [1, 2, 3, 4, 5, 6]
// function mergeSortedArrays(arr1, arr2) {
//   let i = 0,
//     j = 0;
//   let mergedArray = [];

  // Traverse both arrays and merge them in sorted order
  // while (i < arr1.length && j < arr2.length) {
  //   if (arr1[i] < arr2[j]) {
  //     mergedArray.push(arr1[i]);
  //     i++;
  //   } else {
  //     mergedArray.push(arr2[j]);
  //     j++;
  //   }
  // }

  // If there are remaining elements in arr1, add them to the merged array
  // while (i < arr1.length) {
  //   mergedArray.push(arr1[i]);
  //   i++;
  // }

  // If there are remaining elements in arr2, add them to the merged array
//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }
// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// const merged = mergeSortedArrays(arr1, arr2);
// console.log(merged);





//TASK  Increase the numbers 5 with the help of for loop in arr
// const my_arr = [12, 3, 4, 5, 19];
// let new_arr=[]
// for (let i = 0; i < my_arr.length; i++){
//     new_arr.push(my_arr[i] + 5)

// }
// console.log(new_arr)

//TASK Make uppercase the first letter of the str which you entered with the prompt
// let my_str = prompt("Enter the string");
// function isCapitalize(str) {
//     if (str.length === 0) {
//         return str;
//     }
//     let new_str = str.split("");
//     new_str[0] = new_str[0].toUpperCase();
//     let capitalizedStr = new_str.join("");
//     return capitalizedStr;
// }

// console.log(isCapitalize(my_str));

// TASK
// let arr=[0,1,2,3,4,5,7,8,9]
// for (let i = 0; i < 9; i++){
//     if (!arr.includes(i)) {
//         console.log(i)
//     }
// }

//TASK Verilen cumlede butun sozlerin bas herfini boyudun
// function capitalizeFirstLetters(sentence) {
//   return sentence
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// let cumle = "verilen cumlede butun sozlerin bas herfini boyudun";
// let sonuc = capitalizeFirstLetters(cumle);
// console.log(sonuc);

//Factorial of a Number:
// Write a function that computes the factorial of a given number
// function calcFactorial(n) {
//   if (n < 0) {
//     return "Faktorial menfi ededler ucun teyin olunmayib"
//   } else if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n*calcFactorial(n-1)
//   }
// }
// console.log(calcFactorial(5))


//EDEDIN SADE OLUB OLMADIGINI TAPAN KOD YAZ
// function isPrimary(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++){
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return true;
// }
// console.log(isPrimary(4))
// console.log(isPrimary(7))



//TASK  Verilen ededden sonraki ilk sade ededin tapin
// function isPrimary(n) {
//   if (n <= 1) {
//     return false
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++){
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function firstPrimary(n) {
//   let nextNum = n + 1
//   while (!isPrimary(nextNum)) {
//     nextNum++
//   }
//   return nextNum;
// }
// console.log(firstPrimary(8))


//TASK  If there is an element ending with 9 in the given array, return true, if not, return false
// function endsWithNine(arr) {
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 10 === 9) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(endsWithNine([12,3,5,6]))
// console.log(endsWithNine([12,39]))


//TASK Array Intersection:
// Write a function that returns the intersection of two arrays.
// Example: [1, 2, 3] and [2, 3, 4] → [2, 3]
// function arrayIntersection(arr1, arr2) {
//   return arr1.filter(element => arr2.includes(element));
// }
// const array1 = [1, 2, 3];
// const array2 = [2, 3, 4];
// const intersection = arrayIntersection(array1, array2);

// console.log(intersection); 



