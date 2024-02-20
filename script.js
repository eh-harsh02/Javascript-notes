// ---------------------------------> What is JavaScript? <--------------------------------
// JavaScript (JS) is the top programming language for web development, used for both Client-Side and Server-Side purposes. It’s is also known as a scripting language for web pages.It is commonly used to create dynamic and interactive content on websites.

// ----------------------------------------> Datatypes <----------------------------

const accountId = 125416;
let accountEmail = "harshraj@gmail.com";
var accountPassword = "1234943"; // Prefer not to use var because of issue in block scope and functional scope
accountCity = "Patna";
let accountState; // it will give undefined value

// // accountId = 4 // not allowed ---> const variable already defined

accountEmail = "aman@gmail.com";
accountPassword = "3665564";
accountCity = "Mumbai";

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// ------------------------------------> Conversion operation <--------------------
// Link to study typeConversion ---> https://tc39.es/ecma262/multipage/abstract-operations.html

let score = "33abc";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan (Not a Number)
// true => 1; false => 0

let isLoggedIn = "aman";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// // 1 => true; 0 => false
// // "" => false
// // "aman" => true

let sumNumber = 33;

let stringNumber = String(sumNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//          -----------------------------> operations <-----------------------------

let value = 3;
let negValue = -value; // negative Value
console.log(negValue);

console.log(4 + 5);
console.log(9 - 5);
console.log(4 * 5);
console.log(4 / 5);
console.log(18 % 5);

let str1 = "Hello";
let str2 = " Harsh";
let str3 = str1 + str2;
console.log(str3);

console.log("5" + 4); // --> 54
console.log(5 + "4"); // --> 54
console.log("5" + 4 + 4); // --> 544
console.log(5 + 4 + "4"); // --> 94

console.log(true); // --> true
console.log(+true); // --> 1
// console.log(true+); // --> error
console.log(+""); // --> 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let x = 100;
x++; // postfix
++x; // prefix
console.log(x);
// Link to study Increament ---> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
