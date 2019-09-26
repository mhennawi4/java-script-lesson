//console.log("Did you change my file name?");
//console.log("You made it to the console!");

function main() {
  console.log("it works");

  let firstnumber, secondnumber, text;

  //get the width-value from id=textfield1
  firstnumber= document.getelementbyid("textfield1").value;
  document.getelementbyid("validityTest1").innerHTML = testNaN (firstnumber);
//testNaN (firstnumber);

  //get the height-value from id=textfield2
  secondnumber= document.getelementbyid("textfield2").value;
}
