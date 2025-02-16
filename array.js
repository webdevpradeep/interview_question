// Question No. 1: Write a program find a common value in Array?
// const x = [1, 2, 3, 4];
// const y = [3, 4, 5, 6];
// const z = [];
// for (let i = 0; i < x.length; i++) {
//   for (let j = 0; j < y.length; j++) {
//     if (x[i] == y[j]) {
//       z.push(y[j]);
//     }
//   }
// }
// console.log(z);

// Question Node. 2: Write a program remove all zero and push last index in Array?
// const x = [0, 2, 1, 0, 3];
// let time = 0;
// for (let i = 0; i < x.length - time; i++) {
//   if (x[i] === 0) {
//     x.splice(i, 1);
//     x.push(0);
//     i = i - 1;
//     time = time + 1;
//   }
// }
// console.log(x);

// Question No. 3: Write a program find the largest value in Object?

// const x = { a: 10, b: 20, c: 5 };
// let value = 0;
// for (let key in x) {
//   if (x[key] > value) {
//     value = x[key];
//   }
// }
// console.log(value);

// Question No. 4: Write a program sum of all vlaue which in given Array and store sum in Array in lest index?
// const num = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum = sum + num[i];
// }
// num.push(sum);
// console.log(num);

// Question No. 5: Write a program find how many "e" persent in String?
// const x = "welcome";
// let num = 0;
// for (let i = 0; i < x.length; i++) {
//   if (x[i] === "e") {
//     num + 1;
//   }
// }
// console.log(num);

// Question No. 6: Write a program find how many element in String?
// const x = "naman";
// let counter = {};
// for (let letter in x) {
//   counter[letter] = (counter[letter] || 0) + 1;
// }
// console.log(counter);

// ---------------------and-------------------

// const str = "naman";
// let counter = {};
// for (let i = 0; i < str.length; i++) {
//   counter((str[i] = counter[str[i] || 0])) + 1;
// }
// console.log(counter);

// Question No.7: Write a program find lage value in Array?

// const num = [10, 20, 5, 30, 40];
// let counter = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > counter) {
//     counter = num[i];
//   }
// }
// console.log(counter);

// Question No.8: Write a program change Array in Ascending order?
// const arr = [5, 2, 8, 1, 9];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       let tem = arr[i];
//       arr[i] = arr[j];
//       arr[j] = tem;
//     }
//   }
// }
// console.log(arr);
// Question No.9: _______________________________________
// const arr = [5, 7, 10, 17, 15];
// let max = -Infinity;
// let secondMax = -Infinity;
// for (let num of arr) {
//   if (num > arr) {
//     secondMax = max;
//     max = num;
//   } else if (num > secondMax && num !== max) {
//     secondMax = max;
//   }
// }
// console.log(secondMax);

// Question No.10:--------------------------------------------------
// function alphatCounter(str) {
//   let counter = {};
//   for (let letter of str) {
//     counter[letter] = (counter[letter] || 0) + 1;
//   }
//   return counter;
// }
// const value = alphatCounter('pradeep');
// console.log(value);

// Question No.11: Write a program change Array in Descending order?
// let arr = [4, 2, 7, 1, 3];
// let n = arr.length;
// for (let i = 0; i < n; i++) {
//   for (let j = i + 1; j < n; j++) {
//     if (arr[i] < arr[j]) {
//       let tem = arr[i];
//       arr[i] = arr[j];
//       arr[j] = tem;
//     }
//   }
// }
// console.log(arr);

// Question No.12: Write a program find Anagram?
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let counter = {};
//   for (let letter of str1) {
//     counter[letter] = (counter[letter] || 0) + 1;
//   }
//   for (let items of str2) {
//     if (!counter[items]) {
//       return flase;
//     }
//     counter[items] -= 1;
//   }
//   return true;
// }
// console.log(isAnagram('hello', 'ollhe'));

// Question No.13: Find all active Students in given Array and Store other Array?
// let students = [
//   { name: 'Anurga', class: 10, subject: 'math', isActive: true },
//   { name: 'Aryan', class: 12, subject: 'scince', isActive: false },
//   { name: 'Himanshu', class: 8, subject: 'history', isActive: true },
//   { name: 'Poga', class: 11, subject: 'english', isActive: true },
// ];
// const activePerson = [];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].isActive) {
//     activePerson.push(students[i]);
//   }
// }
// console.log(activePerson);

// Question No.14: Make a function calculate the area of cricle?
// function areaOfCricle(r) {
//   return (22 / 7) * r ** 2;
// }
// const value = areaOfCricle(10);
// console.log(value);

// Question No.15: find the number 21 is resent in given Array or not?
// const nums = [7, 6, 5, 2, 15, 20, 17, 1, 52, 33, 99, 21];
// const myNum = 21;
// let isFound = false;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] == myNum) {
//     console.log(i);
//     isFound = true;
//   }
// }
// if (!isFound) {
//   console.log('Not Found');
// }

// Question No.16: Decimal to Binray?
// let Quetient = 25;
// let bin = 0;
// let k = 1;
// while (Quetient > 0) {
//   let rem = Quetient % 2;
//   Quetient = Quetient - rem / 2;
//   bin = bin + k * rem;
//   k = k * 10;
// }
// console.log();

// Question No.17: Remove Duplicate number for Array?
// const arr = [5, 7, 5, 10, 15, 7, 1, 15, 255, 10];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       arr.splice[(j, 1)];
//     }
//   }
// }
// console.log(arr);

// Question No.18: Story all value in singal Array of given Array?
// const numArr = [
//   [5, 10],
//   [15, 7, 10],
//   [171, 55],
// ];
// const arr = [];
// let i = 0;
// while (i < numArr.length) {
//   let j = 0;
//   while (j < numArr.length) {
//     arr.push(numArr[i][j]);
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// Question No.19: Find the Suffle String?

// const str = 'remayan';
// let suffleStr = '';
// const strArr = [];
// for (let i = 0; i < str.length; i++) {
//   strArr.push(str[i]);
// }

// for (let i = 0; i < strArr.length; i++) {
//   const randomIndex = Math.floor(Math.random() * (i + 1));
//   let temp = strArr[i];
//   strArr[i] = strArr[randomIndex];
//   strArr[randomIndex] = temp;
// }

// for (let i = 0; i < strArr.length; i++) {
//   suffleStr = suffleStr + strArr[i];
// }
// console.log(suffleStr);

// Question No.20: Compaire two object are equal or not?
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 2, a: 1 };
// for (let key in obj1) {
//   let isPresent = false;
//   for (let key2 in obj2) {
//     isPresent = true;
//   }
// }
// if (!isPresent) {
//   console.log('not equal');
//   break;
// }
// console.log(isPresent);

// Question No.21: Make a function which given number in the Range of 1-6?
// const x = Math.floor(Math.random() * Array.length) + 1;
// console.log(x);

// Question No.22:Find missing number in given Array for given range of number?
// function missingNumberFind(arr, numberOfMissing) {
//   const compaireingArr = [];
//   const missingNumber = [];
//   for (let i = 1; i < arr.length + numberOfMissing; i++) {
//     compaireingArr.push(i);
//   }
//   for (let i = 0; i < compaireingArr.length; i++) {
//     let isPresent = false;
//     for (let j = 0; j < arr.length; j++) {
//       if (compaireingArr[i] == arr[j]) {
//         isPresent = true;
//       }
//     }
//     if (!isPresent) {
//       missingNumber.push(compaireingArr[i]);
//     }
//   }
//   console.log(`missingNumber:${missingNumber}`);
// }
// const arr = [1, 2, 3, 5, 7];
// missingNumberFind(arr, 2);

// Question No.23: Find which students get high marks in given Array and tell his name?
// let marks = 0;
// let sName = '';
// const students = [
//   { name: 'Anurag', marks: 85 },
//   { name: 'Deepak', marks: 75 },
//   { name: 'Shani', marks: 95 },
// ];

// for (let i = 0; i < students.length; i++) {
//   if (students[i].marks > marks) {
//     marks = students[i].marks;
//     sName = students[i].name;
//   }
// }
// console.log(sName);
// console.log(marks);
// ----------------------------And--------------------------
// for (let i = 0; i < students.length; i++) {
//   if (students[i].marks > marks) {
//     marks = students[i].marks;
//   }
// }
// for (let inde of students) {
//   if (inde.marks == marks) {
//     console.log(inde.marks);
//   }
// }
// console.log(sName);
// console.log(marks);

// Question No.24: Find largest value in this Object?
// const obj = { a: 10, b: 20, c: 5 };
// let value = 0;
// for (let key in obj) {
//   if (obj[key] > value) {
//     value = obj[key];
//   }
//   console.log(`$(key): ${obj[key]}`);
// }
// console.log(`largest value in this object : ${value}`);

// Question No.25: Binary to Decimal?

// const binNum = [1, 0, 0];
// let power = 0;
// let decimalNum = 0;
// for (let i = binNum.length - 1; i >= 0; i--) {
//   decimalNum = decimalNum + binNum[i] * 2 ** power;
//   power++;
// }
// console.log(`decimal number of binary number ${binNum} = ${decimalNum}`);

// Question No.26: Find the upper case ?
// const str = 'Hello';
// for (let i = 65; i < 91; i++) {
//   function capitalizeStringUsingASCII(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       let charCode = str.charCodeAt(i);
//       if (charCode >= 97 && charCode <= 122) {
//         result += String.fromCharCode(charCode - 32);
//       } else {
//         result += str[i];
//       }
//     }
//     return result;
//   }
// }
// let result = capitalizeStringUsingASCII('hello world');
// console.log(result);

// Question No.27: Find the second largest value in given Array?
// const arr = [12, 35, 1, 10, 351];
// function findSecondlargestNum(arr) {
//   let largest;
//   let secondlargest;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondlargest = largest;
//       largest = arr[i];
//     } else {
//       arr[i] < largest && arr[i] > secondlargest;
//       secondlargest = arr[i];
//     }
//   }
//   return secondlargest;
// }
// const x = findSecondlargestNum(arr);
// console.log(x);

// Question No.28: Compaire two Object are equal or Not.?
// const obj1 = { a: 2, b: 5, c: 3 };
// const obj2 = { a: 2, b: 5, C: 3 };
// function deepCompaireObj(obj1, obj2) {
//   if (typeof obj1 && typeof obj2 !== 'object') {
//     return false;
//   }
//   const obj1Len = Object.keys(obj1).length;
//   const obj2Len = Object.keys(obj2).length;

//   if (obj1Len !== obj2Len) {
//     return false;
//   }
//   for (const key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
// }
// console.log(deepCompaireObj(obj1, obj2));
// ------------------------And-------------------------------
// const obj1Len =
//     const obj2Len =
// function deepCompaireObj(obj1, obj2){

//     if(obj1Len !== obj2Len){
//         return false
//     }
//     for(let key in obj1){
// if(obj1[key] !== obj2[key]){
//     return false
// }
//     }
// return true
// }
// console,log(deepCompaireObj(obj1,obj2))

// Question No.29: Find missing number in Array?
// function findMissingNum(arr, n) {
//   const sumOfn = (n * (n + 1)) / 2;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sumOfn - sum;
// }
// console.log(findMissingNum([1, 2, 3, ,], 5));

// Question  No.30: Make a function which tell Delivery charge according price ?
function deliveryCharge(price) {
  if (price < 100) {
    return 'delivery Charging: 30Rs';
  } else if (price > 100 && price < 200) {
    return 'delivery Charging:10Rs';
  } else {
    return 'free delivery Charging';
  }
}
const x = deliveryCharge(20);
console.log(x);
