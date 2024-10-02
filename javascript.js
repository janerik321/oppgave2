/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/
let num;

function oddEven(num) {
  if (num % 2 === 1) {
    return "Odd";
  } else {
    return "Even";
  }
}

console.log(oddEven(5));

/******************************************************************************
2.

Make the following function:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/
const stringInput = "";

const exclamationString = (stringInput) => {
  return stringInput.toUpperCase() + "!";
};

console.log(exclamationString("Hallo i luken"));
/******************************************************************************
3.

Make the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23

If no hour is received, your function should return an error message.

******************************************************************************/
const userName = "";
const hourOfDay = 0;

function userGreeting(userName, hourOfDay) {
  if (hourOfDay < 0) {
    return "Invalid time";
  } else if (hourOfDay >= 0 && hourOfDay <= 5) {
    return "Good night " + userName;
  } else if (hourOfDay >= 6 && hourOfDay <= 11) {
    return "Good morning " + userName;
  } else if (hourOfDay >= 12 && hourOfDay <= 17) {
    return "Good day " + userName;
  } else if (hourOfDay >= 18 && hourOfDay <= 23) {
    return "Good evening " + userName;
  } else if (hourOfDay > 23) {
    return "Invalid time";
  } else {
    return "Error";
  }
}

console.log(userGreeting("Jan Erik", 10));
/******************************************************************************
4.

Make the following function:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/
let arrayInput = [];
const arrayTrim = (arrayInput) => {
  arrayInput.shift();
  arrayInput.pop();
  return arrayInput;
};

console.log(arrayTrim(["Red", "Green", "Blue", "Yellow"]));
console.log(arrayTrim(["One", "Two", "Three", "Four", "Five", "Six"]));
/******************************************************************************
5.

Make the following function:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/
const funFix = (stringToBeFixed) => {
  return stringToBeFixed.replaceAll("hard", "fun").trim();
};

console.log(funFix("  Javascript is hard   "));
console.log(funFix(" It's hard to use methods "));
console.log(funFix("   hard        "));
/******************************************************************************
6.

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

******************************************************************************/

const heroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
  "Black Widow",
];

heroes.shift();
heroes.splice(2, 1, "Skrull");
heroes.splice(0, 2, "Captain America");

console.log(heroes.join("💪"));
/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/
let input;
const test = ["a", "b", "c"];

function extra1(input) {
  if (typeof input === "string") {
    return "😎" + input + "😎";
  } else if (typeof input === "number") {
    return String("😎" + input * 2 + "😎");
  } else if (typeof input === "boolean") {
    if (input) {
      return "😎Yeah😎";
    } else {
      return "😎Chill😎";
    }
  } else {
    return "😎Primitive values only😎";
  }
}

console.log(extra1("Hei"));
console.log(extra1(5));
console.log(extra1(true));
console.log(extra1(test));
/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/
let arrayParam = [];
const stringParam = "";

const extra2 = (arrayParam, stringParam) => {
  if (arrayParam.indexOf(stringParam) >= 0) {
    arrayParam.splice(arrayParam.indexOf(stringParam), 1);
  } else {
    arrayParam.push(stringParam);
  }
  return arrayParam;
};

console.log(extra2(["Red", "Green"], "Blue"));
console.log(extra2(["Red", "Green", "Blue"], "Green"));
console.log(extra2(["One", "Two", "Three"], "Four"));
console.log(extra2(["One", "Two", "Three"], "Two"));
