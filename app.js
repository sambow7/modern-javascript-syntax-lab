// // ! Exercise 1:
// // a. Use the `map()` method to iterate over the provided `nums` array
// //
// // b. Use the callback function of the `map()` method you wrote to
// //    create a new array where each value is multiplied by 2.
// //    Name the new array `numsTimesTwo`.
// //
// // c. Console log the new array.
// //
// // Starting code (don't modify this):

// // const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// // Your code here:

// // const numsTimesTwo = nums.map((num) => num * 2);
// console.log(numsTimesTwo);

// //Reviewer:

// const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];
// const [firstPet, secondPet] = petsArray;

// console.log(firstPet);
// // Prints: 'Rover'
// console.log(secondPet);
// // Prints: 'Snuffles'

// // Equivalent in traditional bracket notation:
// console.log(petsArray[0]);
// // Prints: 'Rover'
// console.log(petsArray[1]);
// // Prints: 'Snuffles'

// // ! Exercise 2:
// // a. Given the provided `pizzaToppings` array, use destructuring to extract 
// //    the first and second values and place them into variables. Name the 
// //    variable that corresponds to the first value `firstIngredient`. Name the 
// //    variable that corresponds to the second value `secondIngredient`.
// //
// // b. Console log the `firstIngredient` and `secondIngredient` variables.
// //
// // Starting code (don't modify this):

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// // Your code here:

// const [firstIngredient, secondIngredient] = pizzaToppings;
// console.log("first ingredient:",firstIngredient);
// console.log("second ingredient:", secondIngredient);

// // Reviewer

// const person = {
//   name: 'Alex',
//   role: 'Software Engineer',
// };

// // Object destructuring:
// const { name, role } = person;

// console.log(name);// Prints: 'Alex'
// console.log(role);// Prints: 'Software Engineer'

// // Equivalent in traditional dot notation:
// console.log(person.name); // Prints: 'Alex'
// console.log(person.role); // Prints: 'Software Engineer'

// // ! Exercise 3:
// // a. Given the provided `car` object, use destructuring to create two
// //    variables: `make` and `model` that will hold the respective values.
// //
// // b. Console log the `make` and `model` variables.
// //
// // Starting code (don't modify this):

// const car = {
//   make: 'Audi',
//   model: 'Q5',
// };

// // Your code here:

// const {make, model} = car
// console.log("make:", make, "model:", model);


// // Reviewer
// const originalArray = [1, 2, 3];
// const duplicateArray = [...originalArray];

// console.log("duplicate", duplicateArray); // Prints: [1, 2, 3]

// duplicateArray.push(4); 
// // Using spread created a *copy* of the `originalArray`
// // Changing it doesn't also change `originalArray`

// console.log(duplicateArray); // Prints: [1, 2, 3, 4]
// console.log(originalArray); // Prints: [1, 2, 3]

// // const originalArray = [1, 2, 3];
// const referenceArray = originalArray; // referenceArray a reference to originalArray (not a copy)

// referenceArray.push(4); // This means modifying `referenceArray` also modifies `originalArray`

// console.log(referenceArray); // Prints: [1, 2, 3, 4]
// console.log(originalArray); // Prints: [1, 2, 3, 4]

// const fruits = ['apple', 'orange', 'banana'];
// const vegetables = ['broccoli', 'carrot', 'spinach'];

// const fruitsAndVegetables = [...fruits, ...vegetables];

// console.log(fruitsAndVegetables); // Prints: ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

// ! Exercise 4: 
// a. Duplicate the provided `morePizzaToppings` array using the spread 
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
// 
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):

// const morePizzaToppings = ['Cheese', 'Sauce'];

// // Your code here:

// const uncontroversialPizzaToppings = [...morePizzaToppings];

// console.log(uncontroversialPizzaToppings);

// const originalObject = {
//   foo: 'Hello',
//   bar: 100,
// };

// const clonedObject = { ...originalObject };
// console.log('Clone: ', clonedObject); // Prints: { foo: 'Hello', bar: 100 }

// const originalObject = {
//   foo: 'Hello',
//   bar: 100,
// };

// const clonedObject = originalObject;
// clonedObject.foo = 'Goodbye';

// console.log(originalObject); // Prints: { foo: 'Goodbye', bar: 100 }

// const originalObject = {
//   foo: 'Hello',
//   bar: 100,
// };

// // Copy the properties of `originalObject`:
// const clonedObject = { ...originalObject };

// // Update the properties of `clonedObject`:
// clonedObject.foo = 'Goodbye';
// clonedObject.bar = 0;

// console.log('Original: ', originalObject);
// // Prints: { foo: 'Hello', bar: 100 }
// console.log('Clone: ', clonedObject);
// // Prints: { foo: 'Goodbye', bar: 0 }

// ! Exercise 5:
// // a. Duplicate the provided `anotherCar` object and spread its values into a 
// //    new variable named `myCar`.
// //
// // b. Change the `make` and `model` properties of the `myCar` object to new 
// //    values.
// //
// // c. Console log both objects and observe the results.
// //
// // Starting code (don't modify this):

// const anotherCar = {
//   make: 'Toyota',
//   model: 'RAV4',
// };

// // Your code here:

// const clonedObject = { ...anotherCar };

// clonedObject.make = 'Honda';
// clonedObject.model = 'Civic';

// console.log('AnotherCar: ', anotherCar);// Prints: { make: 'Toyota', model: 'RAV4' }

// console.log('MyCar: ', clonedObject);// Prints: { make: 'Honda', model: 'Civic' }


// ! Exercise 6:
// a. Define a variable named `propertyName` and assign a string (like 
//    'username', 'age', or 'email') to it.
// 
// b. Create an object named `userProfile`. 
// 
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a 
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.
//
// Your code here:

// const propertyName = ' username'; 

// const userProfile = {
//   [propertyName]: 'Alo',
// };

// console.log(userProfile);

// ! Exercise 8:
// a. Create a function with two parameters, `noun` and `adjective`.
// 
// b. Give `noun` a default value of "cat" and `adjective` a default value of 
//    "orange".
//
// c. The function should log a sentence 'The cat is orange.' by default, but 
//    should substitute the appropriate parameters when it is supplied with 
//    arguments.
//
// Your code here:

function describeAnimal(noun = 'cat', adjective = 'orange') {
  console.log(`The ${noun} is ${adjective}.`);
}

describeAnimal();