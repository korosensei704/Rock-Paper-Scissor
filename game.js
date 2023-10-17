// vaiblen definieren 
const  ComputerChoiceDisplay = document.getElementById("computer-choice"); 
const  UserChoiceDisplay = document.getElementById("user-choice"); 
const  ErgebnissAnzeige = document.getElementById("result"); 
const moeglicheErgebnisse = document.querySelectorAll('.play-button');
let UserChoice
let computerChoice
let ergebniss
moeglicheErgebnisse.forEach(moeglicheErgebnisse => moeglicheErgebnisse.addEventListener('click',(e)=>{
    UserChoice = e.target.id
    UserChoiceDisplay.innerHTML = UserChoice;
    generateComupterChoice()
    getResult()
}));

function generateComupterChoice (){

    const randomNumber = Math.floor( Math.random() * 3)+1//die drei ist die anzah and möglichen antworten des computer 
    // zug der computer festlegen 
    if (randomNumber === 1){
        computerChoice="rock";
    }
    if (randomNumber === 2){
        computerChoice="scissor";
    }
    if (randomNumber === 3){
        computerChoice="paper";
    }
    ComputerChoiceDisplay.innerHTML = computerChoice// der fertige zug wird ausgegeben
}
function getResult(){
    if (computerChoice === UserChoice){
        ergebniss="unendschieden"
    }
    if (computerChoice === "rock" && UserChoice ==="paper" ){
        ergebniss="Benutzer gewinnt"
    }
    if (computerChoice === "rock" && UserChoice ==="scissor" ){
        ergebniss="du hast verloren"
    }
    if (computerChoice === "paper" && UserChoice ==="scissor" ){
        ergebniss="du hast gewonnen"
    }
    if (computerChoice === "paper" && UserChoice ==="rock" ){
        ergebniss="du hast verloren"
    }
    if (computerChoice === "scissor" && UserChoice ==="rock" ){
        ergebniss="du hast gewonnen"
    }
    if (computerChoice === "scissor" && UserChoice ==="paper" ){
        ergebniss="du hast verloren"
    }
    ErgebnissAnzeige.innerHTML =  ergebniss    
}