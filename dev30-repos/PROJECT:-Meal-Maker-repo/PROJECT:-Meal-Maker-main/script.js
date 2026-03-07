//Meal Maker Project
//
//Step 1 Created empty object named "menu"
var menu = {
  //Step 2
  // Created a "courses" property, that has an empty object inside of it, inside my "menu" object.
  courses: {
    //Step 3
    // Created three properties called: "appetizers", "mains" and "desserts" with empty arrays initialized.
    appetizers: [],
    mains: [],
    desserts: [],
  },

  //Step 4 && 5
  // Created a function called "addDishToCourse" with parameters "courseName", "dishName" and "dishPrice". This function creates a "dish" object with "name" and "price" properties. Then it pushes the "dish" object to the corresponding location with this.courses[courseName].push(dish). "this" being the current object you're calling this function on, "courses" being the property you looked for in the object. Then "courseName" being property we are looking for and where we are pushing our "dish" to.
  addDishToCourse: function (courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice,
    };
    this.courses[courseName].push(dish);
  },
  //Step 6/7
  // Created "getRandomDishFromCourse" function with "courseName" parameter. The function contains 2 variables, "dishes" and "randomNum".
  // "dishes" contains the path to the given array we're using. this(the object the function is being ran on).
  // "randomNum" contains an equation of Math.random() * the length of the dishes array we created with "dishes" variable. It is then floored with Math.floor()
  // Then we return dishes[randomNum] which indexes randomly into "dishes" array which is whatever course array you pass in as the "courseName" parameter.
  getRandomDishFromCourse: function (courseName) {
    var dishes = this.courses[courseName];
    var randomNum = Math.floor(Math.random() * dishes.length);
    return dishes[randomNum];
  },
  //Step 8
  // Created "generateRandomMeal" function. In the function we have 5 variables that are created. 1 for each course which has code that randomizes the corresponding dish for that course in that object. The 4th is a variable that holds the sum of the total price of all 3 course prices that are randomly generated. The 5th holds the entire string statement with the interjected template literals, accessing the total price of the meal and fills in the name of course item that was generated.
  generateRandomMeal: function () {
    var appetizer = this.getRandomDishFromCourse("appetizers");
    var main = this.getRandomDishFromCourse("mains");
    var dessert = this.getRandomDishFromCourse("desserts");
    var totalPrice = appetizer.price + main.price + dessert.price;
    var orderUp = `The total price of your meal is: $${totalPrice}. Your meal you selected was ${appetizer.name}, ${main.name} and ${dessert.name}`;
    return orderUp;
  },
};
//Step 9
// Created 9 dishes for tonights grand opening. Invited several local celebrities and a couple food critics to spark some interest in our new restaurant. Added 3 new appetizers, 3 desserts and 3 main dishes using .addDishToCourse, a herd of cooks & bakers and me as the expediter.
menu.addDishToCourse("appetizers", "Mozzarella Sticks", 12);
menu.addDishToCourse("appetizers", "Onion Rings", 10);
menu.addDishToCourse("appetizers", "Wings", 14);
menu.addDishToCourse("desserts", "Chocolate Chip Cookies", 12);
menu.addDishToCourse("desserts", "Cheesecake", 22);
menu.addDishToCourse(
  "desserts",
  "More Cheesecake",
  22 + menu.courses.desserts[1].price,
);
menu.addDishToCourse("mains", "stroganoff", 22);
menu.addDishToCourse("mains", "Meatloaf", 22);
menu.addDishToCourse("mains", "Twice-Baked Potatoes", 16);
//Step 10
// Assigning the meal variable with menu.generateRandomMeal(), which will randomly select a combination of 1 of each of the 3 courses we offer. It will then print out a string that includes the total calculated price and the selected items.
var meal = menu.generateRandomMeal();
console.log(meal);
