/console.log("Did you change my file name?");
console.log("You made it to the console!");

console.log(''); // Prints 2 spaces in the Conosle
console.log(''); // So output is easier to read

// Create 10 variables about yourself and a friend
// Object Template
/*
let person1 = {
  firstName: ,
  lastName: ,
  age: , //Not my real age :)
  favoriteNumber: , //security feature
  hair: , // explore: undefined, null; origonally "none"
  // debug with typeof
  male: ,
  female: ,
  other: ,
};
*/

let person1 = {
  firstName: "Mark",
  lastName: "Mercer",
  age: 9, //Not my real age :)
  favoriteNumber: 13, //security feature
  hair: undefined, // explore: undefined, null; origonally "none"
  // debug with typeof
  male: true,
  female: false,
  other: false,
};

let person2 = {
  firstName: "Abigail",
  lastName: "Mercer",
  age: 13, //Not my real age :)
  favoriteNumber: 101, //security feature
  hair: null, // explore: undefined, null; origonally "none"
  // debug with typeof
  male: false,
  female: true,
  other: false,
};

// Print variables to console
// console.log(); illustrate object notation with dot notation
console.log(person1.lastName); //Accesses an object's key:value
console.log(person2.firstName);
console.log(person2.hair); console.log("Am I male? " + person2.male); // To check for TRUE value use If Statements, or use developer manual
