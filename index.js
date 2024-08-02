// TASK
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

//Task
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

// ARRAY DESTRUCTIRING,Spread Operator,Rest Operator'
//TASK
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
//TASK
// Reverse Array: Write a function that reverses the elements of an array using a loop.
// function getReverse(arr) {
//   const reversedArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }
//   return reversedArr;
// }

// console.log(getReverse([1, 2, 3]));

//  Task
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

// TASK
// String Length: Write a function that takes a string as input and returns the length of the string.
// function calcLength(str) {
//   return str.length;
// }
// console.log(calcLength("Porsche"));

//TASK
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

//Bir arraydaki en boyuk ve en kicik ededi tapin
// function findMinMax(arr) {
//   if (arr.length === 0) {
//     return { min: null, max: null };
//   }
//   let minElement = arr[0];
//   let maxElement = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minElement) {
//       minElement = arr[i];
//     }
//     if (arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//   }

//   return { min: minElement, max: maxElement };
// }
// console.log(findMinMax([1, 2, 3, 4, 5]))

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

//Verilmis arrayda tekrar olmayan butun elementleri qeyd etmek
// function calcUnique(arr){
//   let uniqueArr=[];
//   for(let i=0;i<arr.length;i++){
//     if(!uniqueArr.includes(arr[i])){
//       uniqueArr.push(arr[i])
//     }
//   }
//   return uniqueArr
// }
// console.log(calcUnique([1,2,3,4,5,5,5,6,7,8,8,8]))

//Task UCBUCAGIN NOVUNU TEYIN ET
// function checkTriangle(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) {
//     console.log("Ucbucaq movcuddur");

//     if (a === b && a === c) {
//       console.log("Ucbucaq berabertereflidir");
//     } else if (a == b || a == c || b == c) {
//       console.log("Ucbucaq beraberyanlidir");
//     } else {
//       console.log("Ucbucaq muxteliftereflidir");
//     }
//   } else {
//     console.log("Ucbuaq yoxdur");
//   }
// }

//TASK DUZBUCAQLI UCBUCAQ OLUB OLMADIGINI YOXLA
// function isRightTriangle(a, b, c) {
//     if (a + b <= c || a + c <= b || b + c <= a) {
//         console.log('Ucbucaq movcud deyil');
//         return;
//     }
//     const sides = [a, b, c].sort((x, y) => x - y);
//     const [x, y, z] = sides;

//     if (z * z === x * x + y * y) {
//         console.log("Ucbucaq duzbucaqlidir")
//     } else {
//         console.log("ucbucaq duznucaqli deyil")
//     }
// }
// console.log(isRightTriangle(3,4,5))
// console.log(isRightTriangle(6,8,10))
// console.log(isRightTriangle(7,4,5))

//TASK Massivdə Təkrarlanan Elementləri Tapmaq
// Verilmiş bir massivdə təkrarlanan elementləri tapan bir funksiya yazın.
// function findDuplicates(arr) {
//     const seen = new Set();
//     const duplicates = new Set();
//     for (const num of arr) {
//         if (seen.has(num)) {
//             duplicates.add(num);
//         } else {
//             seen.add(num);
//         }
//     }
//     return Array.from(duplicates);
// }
// console.log(findDuplicates([1, 2, 3, 4, 5, 3, 2, 6])); // [3, 2]
// console.log(findDuplicates([7, 8, 9, 7, 9, 10])); //

// Userden 5 eded alin alinan ededlerden sade ve 10 dan boyuk ededleri bir liste elave edib ekranda gosterin
// const numbers = [];
// for (let i = 0; i < 5; i++) {
//     let number = parseInt(prompt(`Eded daxil edin ${i + 1}:`));
//     while (isNaN(number)) {
//         number = parseInt(prompt(`Duzgun eded daxil edin ${i + 1}:`));
//     }
//     numbers.push(number);
// }
// const filteredNumbers = numbers.filter(num => {
//     if (num <= 1) return false; // 1 sadə deyil
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false; // Sadə deyil
//     }
//     return num > 10;
// });
// if (filteredNumbers.length > 0) {
//     console.log("Sade və 10-dan böyük ededlər:");
//     filteredNumbers.forEach(num => console.log(num));
// } else {
//     console.log("Sade və 10-dan böyük eded yoxdur.");
// }

//TASKV Verilmiş bir massivdən cüt ədədləri seçmək və onların kvadratlarını bir listə daxil etmək
// function isCalc(arr) {
//     let new_arr=[]
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0) {
//             new_arr.push(arr[i]*arr[i])
//         }
//     }
//     return new_arr
// }
// console.log(isCalc([2,3,4,5]))

//TASK Verilmiş bir massivdən tək ədədləri seçib onların kvadratlarının cəmini hesablamaq
// function calcSquares(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 != 0) {
//             sum=sum+(arr[i]*arr[i])
//         }
//     }
//     return sum;
// }
// console.log(calcSquares([1,2,3,4,5]))

//TASK Verilmiş bir massivdən ən böyük və ən kiçik ədədləri tapmaq və onların fərqini hesablamaq
// const numbers = [1, 2, 3, 4, 5]
// function calcDifference(arr) {
//     let difference;
//     let min_eded = arr[0];
//     let max_eded = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (min_eded > arr[i]) {
//             min_eded=arr[i]
//         } else if (max_eded < arr[i]) {
//             max_eded=arr[i]
//         }
//     }
//     difference = max_eded - min_eded;
//     return difference
// }
// console.log(calcDifference(numbers))

//TASK
// Verilmiş bir metindəki hər bir hərfə görünüş sayını hesablamaq və hər bir hərfi ekrana çap etmək
// const text = "programming";
// const charCount = {};
// for (const char of text) {
//     if (charCount[char]) {
//         charCount[char]++;
//     } else {
//         charCount[char] = 1;
//     }
// }
// console.log("Hər bir hərf və onların görünüş sayıları:");
// for (const char in charCount) {
//     console.log(`${char}: ${charCount[char]}`);
// }

//TASK
// Verilmiş bir metindəki ən uzun sözü tapmaq və onun uzunluğunu və özünü ekrana çap etmək
// Verilmiş metin
// const text = "JavaScript ilə proqramlaşdırma hər zaman maraqlıdır";
// const words = text.split(" ");
// let longestWord = "";
// for (const word of words) {
//     if (word.length > longestWord.length) {
//         longestWord = word;
//     }

// console.log(`Ən uzun söz: "${longestWord}" (Uzunluq: ${longestWord.length})`);

//EBOBU TAPAN KOD YAZ;
// function findEbob(a, b) {
//   let ebob;
//   if (a > b) {
//     ebob = b;
//   } else {
//     ebob = a;
//   }
//   while (a % ebob !== 0 || b % ebob !== 0) {
//     ebob--;
//     }
//     return ebob
// }
// console.log(findEbob(25,10))

//EKOBU TAPAN KOD YAZ
// function findEkob(a, b) {
//     let ekob;
//     if (a > b) {
//         ekob = a;
//     } else {
//         ekob = b;
//     }
//     while (ekob % a != 0 || ekob % b != 0) {
//         ekob++
//     }
//     return ekob;
// }
// console.log(findEkob(12, 5))
// console.log(findEkob(34,2))

//TASK
// Verilmiş bir metindəki hər bir sözün tərsinə çevirmək və nəticəni ekrana çap etmək

//tASK Verilmiş bir metndəki bütün hərfləri böyük hərfə çevirmək və nəticəni ekrana çap etmək

//TASK EDEDIN MUKEMMEL OLUB OLMADIGINI TAPAN KOD YAZ

//VERILMIS ARRAYDA TEKRARLANAN ELEMENTLERI TAPAN KOD YAZ

//Verilmis arraydaki sade ededleri tapan kod yaz

//Verilmis arraydaki murekkeb ededleri tapan kod yaz

// map Method
// TASK1 Double each number in an array: [1, 2, 3, 4] -> [2, 4, 6, 8]
//TASK2 Convert an array of strings to uppercase: ["apple", "banana", "cherry"] -> ["APPLE", "BANANA", "CHERRY"]
//TASK3 Add 10 to each number in an array: [5, 10, 15] -> [15, 20, 25]
//TASK4 Extract the first letter of each string in an array: ["cat", "dog", "elephant"] -> ["c", "d", "e"]
//TASK5 Create an array of objects with name and length properties from an array of strings: ["Alice", "Bob", "Charlie"] -> [ { name: "Alice", length: 5 }, { name: "Bob", length: 3 }, { name: "Charlie", length: 7 } ]
//TASK6 Square each number in an array: [1, 2, 3, 4] -> [1, 4, 9, 16]
//TASK7 Create an array of the lengths of each string in an array: ["short", "medium", "longer"] -> [5, 6, 7]
//TASK8 Append an exclamation mark to each string in an array: ["hello", "world"] -> ["hello!", "world!"]
//TASK9 Extract the last character of each string in an array: ["cat", "dog", "fish"] -> ["t", "g", "h"]
// filter Method
//TASK10 Filter out even numbers from an array: [1, 2, 3, 4, 5] -> [1, 3, 5]
//TASK11 Filter out strings with length greater than 4: ["short", "medium", "longer"] -> ["medium", "longer"]
//TASK12 Find all numbers greater than 10: [5, 10, 15, 20] -> [15, 20]
//TASK13 Filter out objects where age is greater than 18: [ { name: "Alice", age: 17 }, { name: "Bob", age: 19 } ] -> [ { name: "Bob", age: 19 } ]
//TASK14 Get all strings that contain the letter "a": ["apple", "banana", "cherry"] -> ["apple", "banana"]
//TASK15 Filter out numbers less than 0: [3, -1, 2, -5] -> [3, 2]
//TASK16 Get all even numbers from an array: [1, 2, 3, 4, 5, 6] -> [2, 4, 6]
//TASK17 Filter out strings starting with the letter "b": ["apple", "banana", "cherry"] -> ["banana"]
//TASK18 Find all objects with a status property equal to "active": [ { id: 1, status: "active" }, { id: 2, status: "inactive" } ] -> [ { id: 1, status: "active" } ]
//TASK19 Get all numbers that are divisible by 3: [1, 2, 3, 4, 5, 6] -> [3, 6]
// forEach Method
//TASK20 Print each element of an array: [1, 2, 3, 4] -> 1 2 3 4
//TASK21 Sum all numbers in an array and print the result: [5, 10, 15] -> 30
//TASK22 Print the index of each element in an array: [10, 20, 30] -> 0 1 2
//TASK23 Append a prefix to each string in an array: ["one", "two", "three"] -> ["prefix_one", "prefix_two", "prefix_three"]
//TASK24 Print each property name of an object: { a: 1, b: 2, c: 3 } -> a b c
//TASK25 Print each character of a string on a new line: "hello" -> h e l l o
//TASK26 Print the length of each string in an array: ["apple", "banana", "cherry"] -> 5 6 6
//TASK27 Print whether each number in an array is odd or even: [1, 2, 3, 4] -> odd even odd even
//TASK28 Print each element of an array with its index: [10, 20, 30] -> Index 0: 10, Index 1: 20, Index 2: 30
//TASK29 Print the first letter of each string in an array: ["cat", "dog", "fish"] -> c d f
// reduce Method
//TASK30 Sum all numbers in an array: [1, 2, 3, 4] -> 10
//TASK31 Find the maximum number in an array: [1, 5, 2, 8] -> 8
//TASK32 Concatenate all strings in an array: ["a", "b", "c"] -> "abc"
//TASK33 Count occurrences of each element in an array: ["a", "b", "a", "b", "c"] -> { a: 2, b: 2, c: 1 }
//TASK34 Compute the product of all numbers in an array: [1, 2, 3, 4] -> 24
//TASK35 Find the total length of all strings in an array: ["apple", "banana", "cherry"] -> 16
//TASK36 Flatten a nested array: [[1, 2], [3, 4], [5]] -> [1, 2, 3, 4, 5]
//TASK37 Create an object with properties from an array of keys and values: ["name", "age"], ["Alice", 25] -> { name: "Alice", age: 25 }
//TASK38 Compute the average of an array of numbers: [2, 4, 6, 8] -> 5
//TASK39  Calculate the total of an array of objects' amount properties: [ { amount: 10 }, { amount: 20 }, { amount: 30 } ] -> 60
// find Method
//TASK40 Find the first number greater than 10: [5, 10, 15, 20] -> 15
//TASK41 Find the first string containing the letter "a": ["cat", "dog", "elephant"] -> cat
//TASK42 Find the first object with a status property equal to "active": [ { id: 1, status: "inactive" }, { id: 2, status: "active" } ] -> { id: 2, status: "active" }
//TASK43 Find the first string longer than 5 characters: ["short", "medium", "longer"] -> longer
//TASK44 Find the first even number in an array: [1, 3, 5, 8] -> 8
//TASK45 Find the first object where age is greater than 18: [ { name: "Alice", age: 17 }, { name: "Bob", age: 19 } ] -> { name: "Bob", age: 19 }
//TASK46 Find the first element that is a number: [ "hello", true, 123, false ] -> 123

// map Method
//TASK1
// let arr = [1, 2, 3, 4, 5];
// let new_arr=arr.map((num) => {
//   return(num * 2);
// });
// console.log(new_arr)

//TASK2
// let strArr = ["apple", "banana", "cherry"];
// let new_arr = strArr.map((item) => {
//     return item.toUpperCase()
// })
// console.log(new_arr)

//TASK3
// let arr = [5, 10, 15];
// let new_arr = arr.map((item) => {
//   return item + 10;
// });

// console.log(new_arr);

//TASK4
// let arr = ["cat", "dog", "elephant"];
// let new_arr = arr.map((item) => {
//     return item[0];
// })
// console.log(new_arr)

// TASK5
// let arr = ["Alice", "Bob", "Charlie"];
// let new_arr = arr.map((item) => {
//   return { ["name"]: item, ["length"]: item.length };
// });
// console.log(new_arr);

//TASK6
// let arr = [1, 2, 3, 4]
// let new_arr = arr.map((item) => {
//     return item*item
// })
// console.log(new_arr)

//TASK7
// let arr = ["short", "medium", "longer"];
// let new_arr = arr.map((item) => {
//     return item.length
// })
// console.log(new_arr)

//TASK8
// let arr = ["hello", "world"];
// let new_arr = arr.map((item) => {
//     return item=item+"!"
// })
// console.log(new_arr)

//TASK9
// let arr = ["cat", "dog", "fish"]
// let new_arr = arr.map((item) => {
//    return item.at(-1)
// })
// console.log(new_arr)

// FILTER METHOD
//TASK10
// let arr = [1, 2, 3, 4, 5];
// let filteredArr = arr.filter((item) =>item % 2 === 0)
// console.log(filteredArr)

//TASK11
// let arr = ["short", "medium", "longer"]
// let filteredArr = arr.filter((item) => item.length > 4)
// console.log(filteredArr)

//TASK12
// const arr = [5, 10, 15, 20];
// let filteredArr = arr.filter((item) => item > 10)
// console.log(filteredArr)

//TASK13
// const arr = [{ name: "Alice", age: 17 }, { name: "Bob", age: 19 }]
// const filteredArr = arr.filter((item) => item.age > 18)
// console.log(filteredArr)

//TASK14
// const arr = ["apple", "banana", "cherry"];
// const filteredArr = arr.filter((item) => item.includes("a"))
// console.log(filteredArr)

//TASK15
// const arr = [3, -1, 2, -5];
// const filteredArr = arr.filter((item) => item < 0)
// console.log(filteredArr)

//TASK16
// const arr = [1, 2, 3, 4, 5, 6]
// const filteredArr = arr.filter((item) => item % 2 === 0)
// console.log(filteredArr)

//TASK17
// const arr = ["apple", "banana", "cherry"];
// const filteredArr = arr.filter((item) => item.startsWith('b'))
// console.log(filteredArr)

//TASK18
// const arr = [{ id: 1, status: "active" }, { id: 2, status: "inactive" }]
// const filteredArr = arr.filter((item) => item.status = 'active')
// console.log(filteredArr)

//TASK19
// const arr = [1, 2, 3, 4, 5, 6]
// const filteredArr = arr.filter((item) => item % 3 === 0)
// console.log(filteredArr)

//TASK20
// const arr = [1, 2, 3, 4]
//  arr.forEach((item) => console.log(item))

//TASK21
// let arr = [5, 10, 15]
// const sum = arr.reduce((acc, i) => acc + i)
// console.log(sum)

//TASK22
// const arr = [10, 20, 30]
// arr.forEach((item,index)=>console.log(index))

//TASK23
// const arr = ["one", "two", "three"];
// arr.forEach((item) => console.log("prefix_" + item));

//TASK24
// const obj = { a: 1, b: 2, c: 3 };
// Object.keys(obj).forEach(key => {
//   console.log(key);
// });

//TASK25
// let str = 'hello'
// str.split("").forEach((item)=>console.log(item))

//TASK26
// const arr = ["apple", "banana", "cherry"];
// arr.forEach(str => {
//   console.log(str.length);
// });

//TASK27
// const arr = [1, 2, 3, 4]
// arr.forEach((item) => {
//     if (item % 2 === 0) console.log("even")
//     else console.log("odd")
// })

//TASK28
// const arr = [10, 20, 30];
// arr.forEach((item,index)=>console.log(`Index ${index}:${item}`))

//TASK29
// const arr2 = ["cat", "dog", "fish"]
// arr2.forEach((item)=>console.log(item[0]))

//TASK30
// const arr = [1, 2, 3, 4]
// arr.reduce((acc, i) => console.log(acc + i))

//TASK31
// const arr = [1, 5, 10, 8];
// let max_eded = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max_eded) {
//     max_eded = arr[i];
//   }
// }

// console.log(max_eded);

//TASK32
// const arr = ["a", "b", "c"];
// const result = arr.join('');
// console.log(result);

//TASK33
// const arr = ["a", "b", "a", "b", "c"];
// const occurrences = arr.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});

// console.log(occurrences);

//TASK34
// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((acc, i) => acc *i, 1)
// console.log(sum)

//TASK35
// let str = ["apple", "banana", "cherry"];
// const result = str.reduce((acc, i) => acc + i.length, 0)
// console.log(result)

//TASK36
// const nestedArr = [[1, 2], [3, 4], [5]];
// const [x, y, z] = nestedArr;
// console.log([...x, ...y, ...z]);

//TASK37
// const arr = [
//   ["name", "age"],
//   ["Alice", 25],
// ];
// const [x, y] = arr;
// const newArr = [...x, ...y];
// console.log(newArr);
// const newObj = {};
// newObj[newArr[0]] = newArr[2];
// newObj[newArr[1]] = newArr[3];
// console.log(newObj);

//TASK38
// const arr = [2, 4, 6, 8]
// let sum = arr.reduce((acc, i) => acc + i, 0)
// let ortalama = sum / arr.length
// console.log(ortalama)

//TASK39
// const arr = [
//     { amount: 10 },
//     { amount: 20 },
//     { amount: 30 }
// ]

// const total = arr.reduce((acc, i) => acc + i.amount, 0)
// console.log(total)

//TASK40
// const arr = [5, 10, 15, 20];
// const value = arr.find((item) => item > 10)
// console.log(value)

//TASK41
// const arr = ["cat", "dog", "elephant"];
// const findEl = arr.find((item) => item.includes("a"))
// console.log(findEl)

//TASK42
// const arr = [{ id: 1, status: "inactive" }, { id: 2, status: "active" }]
// let findArr = arr.find((item) => item.status === 'active')
// console.log(findArr)

//TASK43
// const str = ["short", "medium", "longer"]
// let firstStr = str.find((item) => item.length > 5)
// console.log(firstStr)

//TASK44
// const arr = [1, 3, 5, 8];
// const value = arr.find((num) => num % 2 === 0)
// console.log(value)

//Task45
// const arr = [{ name: "Alice", age: 17 }, { name: "Bob", age: 19 }]
// let find = arr.find((item) => item.age > 18)
// console.log(find)

//TASK46
// const arr = ["hello", true, 123, false]
// let findNum = arr.find((item) => typeof (item) === 'number')
// console.log(findNum)

//Task Find First Palindrome String:
// const strings = ["hello", "world", "level", "rotor", "example"];
// const result=strings.find((el) => {
//   const splittedStr = el.split("");
//   const reversedArr = splittedStr.reverse();
//   const joinedStr = reversedArr.join("");
//   return el === joinedStr;
// });

// console.log(result)

//TASK You have an array of order objects, each with an orderId, customerName, and items (an array of item objects with name and quantity) properties.
// Task: Create a summary of total quantities for each item across all orders.
const orders = [
  {
    orderId: 1,
    customerName: "Alice",
    items: [
      { name: "Apple", quantity: 3 },
      { name: "Banana", quantity: 2 },
    ],
  },
  {
    orderId: 2,
    customerName: "Bob",
    items: [
      { name: "Apple", quantity: 1 },
      { name: "Orange", quantity: 4 },
    ],
  },
];

// Expected Output: { Apple: 4, Banana: 2, Orange: 4 }
// let countAlma = 0;
// let countBanana = 0;
// let countOrange = 0;
// let obj = {};
// orders.forEach((item) => {
//   const arr = item.items;

//   arr.forEach((item) => {
//     if (item.name === "Apple") {
//       countAlma+=item.quantity
//     } else if (item.name === "Banana") {
//       countBanana+=item.quantity
//     } else if (item.name === "Orange") {
//       countOrange+=item.quantity
//     }
//   });
// });
// obj["apple"] = countAlma;
// obj["banana"] = countBanana;
// obj["orange"] = countOrange;
// console.log(obj);

//TASK
const students = [
  { name: "Alice", scores: [85, 90, 82] },
  { name: "Bob", scores: [88, 91, 92] },
  { name: "Charlie", scores: [70, 85, 78] },
];

let topStudent = null;
let highestAverage = 0;

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const totalScore = student.scores.reduce((acc, score) => acc + score, 0);
  const averageScore = totalScore / student.scores.length;

  if (averageScore > highestAverage) {
    highestAverage = averageScore;
    topStudent = {
      name: student.name,
      averageScore: averageScore,
    };
  }
}

console.log(topStudent);
