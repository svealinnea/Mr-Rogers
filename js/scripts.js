//Business Logic//

function readInput(userInput) {
  const inputAsANumber = parseInt(userInput);
  let array = [];
  for (let i = 0; i <= userInput; i++) {
      if ([i].toString().includes("3")) {
        array.push(" Won't you be my Neighbor ")
       } else if ([i].toString().includes("2")) {
        array.push(" Boop ")
      } else if ([i].toString().includes("1")) {
        array.push(" beep! ")
    } else {
      array.push (" " + i)
    }
  } return array
}

//UI Logic//
$(document).ready(function(){
  $("form#Rogers").submit(function(event){
    event.preventDefault();
    const userInput = $("input#number").val();
    const answer = readInput(userInput);
    $("#result").text(answer)
    });
  });


//Describe: readInput()
//Test 1: It will identify user input
//Expect: readInput(1).toEqual(1)

//Test 2: It will return an array.
//Expect: readInput(5).toEqual("1,2,3,4,5")

//Test 3: "It will return "Beep!" for all numbers that have a 1 in it."
//Expect: readInput(1).toEqual("Beep!")

//Test 4: "It will return "boop" for all numbers that have a 2 in it."
//Expect: readInput(2).toEqual("Boop!")

//Test 5: "It will return "Won't you be my neighbor? if a 3 is entered"
//Expect readInput(3).toEqual("Won't you be my neighbor?")