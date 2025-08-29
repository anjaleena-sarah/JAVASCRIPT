/* An object is a collection of related 
properties(means what the object has like firstname, lastname,etc)
and/or methods , can represent real world objects(like people, products, places)
    object = {key:value,
                function()}
 */

// Person1 Object
const person1 = {
    firstName: "Anjaleena",
    lastName: "Sarah",
    age: 23,
    isEmployed: true,
    sayHello: function() {
        console.log("Hi! I am Anjaleena")
    },
    place : function(){
        console.log("Kochi")
    },
}

// Objects can't have same name
// Person2 Object and => arrow function
const person2 = {
    firstName: "Treney",
    lastName: "Jose",
    age: 23,
    isEmployed: false,
    sayHello: () => {
        console.log("Hi! I am Treney")
    },
    place : () =>
        console.log("Kochi"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();

person1.place();
person2.place();

















