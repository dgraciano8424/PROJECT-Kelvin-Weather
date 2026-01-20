//this variable is a constant. It can't be changed from its current value of 293.
const kelvin = 0;

//finding out the conversion of kelvin to celsius but, subtracting 273 from the kelvin variable and storing the value of that in the celsius variable.
const celsius = kelvin - 273;

// used our celsius variable in an equation using math operators to find out the conversion to fahrenheit
//We are using the Math.floor built-in function to round the value of the equation down.
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit}F`);
// 0 Kelvin is -460 F

const newton = celsius * (33 / 100);
