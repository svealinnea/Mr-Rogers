//Business Logic//
function readInput(userInput) {
  let inputArray = [];
 
  for (let i = 0; i <= userInput.length; i++)
  if (userInput.includes(3)) {
    inputArray.push("Won't you be my neighbor");

  } else if (userInput.includes(2)) {
    inputArray.push("Boop");

  } else if (userInput.includes(1)) {
    inputArray.push("Beep");  
  } else {
    inputArray.push[i];
  }
  return inputArray;
}


//UI Logic//
$(document).ready(function() {
  $("form#Rogers").submit(function(event){
    event.preventDefault();
    const inputNumber = parseInt($("input#number").val());
    const results = readInput(inputNumber);
    $("#button").submit(function() {
     $("#result").text(results);
    });
  });
});


//Describe: readInput()
//Test 1: It will return an array.
//Expect: inputNumbers(5).toEqual("1,2,3,4,5")

//Test 2: "It will return "Beep!" for all numbers that have a 1 in it."
//Expect: inputNumbers(1).toEqual("Beep!")

//Test 3: "It will return "boop" for all numbers that have a 2 in it."
//Expect: inputNumbers(2).toEqual("Boop!")

//Test 4: "It will return "Won't you be my neighbor? if a 3 is entered"
//Expect inputNumbers(3).toEqual("Won't you be my neighbor?")