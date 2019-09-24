//console.log("Did you change my file name?");
console.log("You made it to the console!");

function simpleOperators (numberA, numberB) {
  let adding = numberA + numberB;
  let subtraction = numberA - numberB;
  let mulitplying = numberA * numberB;
  let division = numberA / numberB;
  let modulus = numberA % numberB;
  console.log(numberA, numberB, 'adding', adding);
  console.log(numberA, numberB, 'subtraction', subtraction);
  console.log(numberA, numberB, 'mulitplying', mulitplying);
  console.log(numberA, numberB, 'division', division);
  console.log(numberA, numberB, 'modulus', modulus);
}

//skip count by _____ for _____ times starting at _____
function skipCpinting (interval, times, startingNumber) {
  for (let i = 1; i <= times; i++ ) {
    startingNumber += interval
    console.log(startingNumber);
  }
}

//Illustrate a WHILE Loop, skip counting
//Do not need to know the number of times with WHILE loops
function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd) {
    numberStart += skipCount;
    console.log(numberStart);
  }
}

function looseEquality (firstOperand, secondOperand) {
  console.log(firstOperand == secondOperand);
}

function strictEquality (firstOperand, secondOperand) {
  console.log(firstOperand === secondOperand);
}

//Ternary Operator
function customerType (points){
  return type = points > 100 ? 'gold' : 'silver' //points > 100 returns a Boolean; when true assigns string of gold, otherwise silver
}

let number = [4, 7, 13, 99, 0, 100, 5, 1, '1'];

simpleOperators(number[0], number[1]);
simpleOperators(number[2], number[3]);
simpleOperators(number[4], number[5]);

//interval, times, startingNumber
skipCpinting (number[0], number[6], number[1]);
skipCpinting (number[5], number[3], number[2]);
howManyTimes(number[0], number[5], number[1]);

//Loose vs. Strict Example, == symbol or === symbol returns Booleans
///Returns True, changes the second operand to a string, then compares values
looseEquality (number[7], number[8]); //Returns True, compares number 1 with number 1
strictEquality (number[7], number[8]); //Returns False, compares typeof variable and value

//Ternary Operator
console.log(customerType (number[3]));


//Not Done Yet
//Not Equality Starter Code, no function defined here yet
//Computer first uses TRUE to evaluate ideas, "not" provides an answer of TRUE
//Outputing individual values of an array, we want to stop at the value 5, but we do not know where it is in the array (do not know the index value)
//Must Read the Array with a FOR Loop
/*
for (let i=0; i<number.length; i++) { //we do not know when to stop in the array
  if (valueArray !=5) { //This is when we do stop, so we accept every other value (common logic for "not")
    console.log(number[i], "Is index number: ", i, "with a total array index of ", number.length);
  } else {console.log("5 is at the index", i); i=number.length} //once we stop, we want to jump out of the loop
}
*/

//Using falsy, for example, preferences
//console.log(preferences(undefined)); //returns colour passed if an actual colour is passed, for example, 'red'
