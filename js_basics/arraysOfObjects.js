// Arrays of Object
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

// console.log(fruits[2].calories);

// To add a new object we can use the push method
// fruits.push({name: "grapes", color: "purple", calories: 62});
// console.log(fruits);

//pop is used to remove an element
// fruits.pop();
// console.log(fruits);

// Splice used remove elements at certain indices
// fruits.splice(1,2); //(1,2) means 1 through 2
// console.log(fruits);

// forEach() to loop through the elements of the array
// fruits.forEach(fruit => console.log(fruit.color)) //this will return entire objects 

// map() will run each element through a function and return a new array
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// console.log(fruitNames);
// console.log(fruitColors);

// filter() will return a new array after using each element and checking a condition
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(yellowFruits);

// reduce() will return a single value
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit); 