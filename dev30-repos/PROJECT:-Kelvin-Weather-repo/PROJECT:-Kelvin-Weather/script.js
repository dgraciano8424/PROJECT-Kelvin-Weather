//this variable is a constant. It can't be redeclared unless in a different scope.
const kelvin = 0;

//finding out the conversion of kelvin to celsius but, subtracting 273 from the kelvin variable and storing the value of that in the celsius variable.
const celsius = kelvin - 273;

// used our celsius variable in an equation using math operators to find out the conversion to fahrenheit
//We are using the Math.floor built-in function to round the value of the equation down.
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit}F`);
// 0 Kelvin is -460 F

// I am interpolating the newton variable into my string. Calculating the equation of Celsius multiplied by the remainder of 33/100. So Newton is equal to 1/3 of celsius.
const newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature in Newton is ${newton}`);
