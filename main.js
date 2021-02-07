console.log('Dice Roller');

let dieRolls =[];
let rollButton= document.querySelector("#rollButton");
let userInput = document.querySelector("#numOfRolls");
let totalSpan= document.querySelector("#total");
let showAllrolls = document.querySelector("#showAllRolls");
let allRollsElement= document.querySelector("#allRollsDisplay");
let reset_button = document.querySelector("#reset-button");

rollButton.addEventListener("click", function(event){
    let diceCount = userInput.value
    let total = 0;
    for(let i = 1; i<= diceCount; i++){
        let roll= Math.floor(Math.random()* 6) + 1
      dieRolls.push(roll)
      total = total + roll;
    }
 totalSpan.innerHTML= total
})

showAllRolls.addEventListener("click", function(event){
    for(let i = 0; i< dieRolls.length; i++){
        const newDiceString = '<li class="dice">' + dieRolls[i] + "</li>";
        allRollsElement.innerHTML += newDiceString;

    }
})

reset_button.addEventListener("click", function(event){
    die_rools=[];
})