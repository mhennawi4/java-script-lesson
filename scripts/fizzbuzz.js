//console.log("Did you change my file name?");
console.log("You made it to the console!");
function fizzbuzz(num) {

  for (let i = 1; i <= num; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      document.getElementById('output').innerHTML += "fizzbuzz<br>"; //Divisible by 3
    } else if (i % 3 === 0) {
      document.getElementById('output').innerHTML += "fizz<br>"; //Divisible by 5
    } else if (i % 5 === 0) {
      document.getElementById('output').innerHTML += "buzz<br>"; //Divisible
    } else {
      document.getElementById('output').innerHTML += i + "<br>";
    }
  }
}


function fizz_buzz(num) {
  if (num % 15 === 0) {
      console.log("FizzBuzz");
  } else if (num % 5 === 0) {
      console.log("Buzz");
  } else if (num % 3 === 0) {
      console.log("Fizz");
  } else {
      console.log(num);
  }
}

for (var i = 1; i <= 100; i++) {  //Limit for the console output ONLY, this is used to show that the basics of FizzBuzz are understood.
  fizz_buzz(i);
}
