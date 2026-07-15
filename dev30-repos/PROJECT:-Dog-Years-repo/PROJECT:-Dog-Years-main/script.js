//this line of code inserts the integer value of my age into a variable named "myAge". Setting it as const for now.
const myAge = 32;

//note the value of this variable is subject to change. this line of code inserts the integer value of 2 into a variable named "earlyYears".
var earlyYears = 2;

var earlyYears = earlyYears * 10.5;

//this line of code take the variable "myAge" and subtracts it by 2 then takes the result of that equation and inserts it into the "laterYears" variable.
var laterYears = myAge - 2;

//this line of code takes the variable "laterYears" , multiplies it by 4 and then assigns the result back into "laterYears"
laterYears *= 4;

console.log(laterYears);
console.log(earlyYears);

//this line of code subtracts 1 variable from another. Inserting the results into a 3rd variable named "myAgeInDogYears"
var myAgeInDogYears = laterYears - earlyYears;

//this line has a variable named "myName" contains a string with a built-in method appended to the end of it resulting in the entire string changing to lowercase characters.
var myName = "David Graciano".toLocaleLowerCase();
console.log(myName);

//this line is a console log that takes a string and adds 3 interpolations (${myName}, ${myAge} and ${myAgeInDogYears}) making it more dynamic
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`,
);
