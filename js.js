let humanPoints = 0;
let computerPoints = 0;
let draws = 0;

function getComputerChoice(){
    number = Math.random();
    if(number >= 0 && number < 0.33){
        return "rock";
    }else if(number >= 0.33 && number < 0.66){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function playRound(humanChoice){
    computerChoice = getComputerChoice();

    console.log(humanChoice);
    console.log(computerChoice);

    if(computerChoice == humanChoice){
        draws++;
        return console.log("Draw");
    } else {
        if(computerChoice == "rock"){
            if(humanChoice == "paper"){
                humanPoints++;
                return console.log("Human wins round");
            } else {
                computerPoints++;
                return console.log("Computer wins round");
            }
        } else if(computerChoice == "paper"){
            if(humanChoice == "scissor"){
                humanPoints++;
                return console.log("Human wins round");
            } else {
                computerPoints++;
                return console.log("Computer wins round");
            }
        } else {
            if(humanChoice == "rock"){
                humanPoints++;
                return console.log("Human wins round");
            } else {
                computerPoints++;
                return console.log("Computer wins round");
            }
        }
    }
}

const ROCK = document.querySelector("#rock");
const PAPER = document.querySelector("#paper");
const SCISSOR = document.querySelector("#scissor");

ROCK.addEventListener("click", () => playRound("rock"));
PAPER.addEventListener("click", () => playRound("paper"));
SCISSOR.addEventListener("click", () => playRound("scissor"));
