//Business Logic//
function readInput(userInput) {
  let inputArray = [1,2,3,4,5,6,7,8,9,10];

  if (userInput.indexOf("1")) {
    for (i =0; i <= userInput; i++) {
    inputArray.push("beep");
    }
  }
}
//testing to see if the above works. Does not seem to work. 

//UI Logic//
$(document).ready(function() {
  $("form#Rogers").click(function(event){
    event.preventDefault();


//Describe: readInput()

//Test 1: "It will return "Beep!" for all numbers that have a 1 in it."
//Expect: inputNumbers(1).toEqual("Beep!")

//Test 2: "It will return "boop" for all numbers that have a 2 in it."
//Expect: inputNumbers(2).toEqual("Boop!")

//Test 3: "It will return "Won't you be my neighbor? if a 3 is entered"
//Expect inputNumbers(3).toEqual("Won't you be my neighbor?")