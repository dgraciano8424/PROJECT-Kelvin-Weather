const userName = "David";
//console log of a ternary expression with a string interpolation embedded inside of it. 
If condition is string it will print "Hello (userName)!", otherwise "Hello!"
console.log(String ? `Hello ${userName}!` : "Hello!");

//constant variable that prints out the question from User
const userQuestion = "Will I ever win the lottery?";
console.log(`${userName} asked, "${userQuestion}`);

//constant variable that has the value of 2 built-in methods: Math.floor and Math.random. 
//Multiplying random by any whole number gives (n - 1). 
//I.E. If we used 1000 i'd get 999 different choices or numbers.
const randomNumber = Math.floor(Math.random() * 8);
const eightBall = randomNumber;

//a switch statement taking the randomized number from 
//variable "eightball" and using it to run the predetermined console.log depending on the RNG.
switch (eightBall) {
  case 0:
    console.log("It is certain");
    break;
  case 1:
    console.log("It is decidedly so");
    break;
  case 2:
    console.log("Reply hazy try again");
    break;
  case 3:
    console.log("Cannot predict now");
    break;
  case 4:
    console.log("Do not count on it");
    break;
  case 5:
    console.log("My sources say no");
    break;
  case 6:
    console.log("Outlook not so good");
    break;
  case 7:
    console.log("Signs point to yes");
    break;
  default:
    "Good Luck!";
}
console.log(eightBall);
