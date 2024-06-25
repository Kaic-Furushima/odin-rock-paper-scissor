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

function determineWinnerRound(winner){
    let result = document.createElement("p");
    if(winner == "human"){
        humanPoints++;
        result.textContent = "Human wins round";
    } else if(winner == "computer"){
        computerPoints++;
        result.textContent = "Computer wins round";
    } else {
        draws++;
        result.textContent = "Draw";
    }
    SHOW_RESULTS.appendChild(result);
}

function determineWinnerGame(){
    let result = document.createElement("p");
    if(humanPoints > computerPoints){
        humanPoints++;
        result.textContent = "Human wins the game";
    } else if(humanPoints < computerPoints){
        computerPoints++;
        result.textContent = "Computer wins the game";
    } else {
        draws++;
        result.textContent = "The game ends in draw";
    }
    SHOW_RESULTS.appendChild(result);
}

function playRound(humanChoice){
    if((humanPoints + computerPoints + draws) < 5){
        computerChoice = getComputerChoice();

        console.log(humanChoice);
        console.log(computerChoice);

        if(computerChoice == humanChoice){
            determineWinnerRound("draw");
        } else {
            if(computerChoice == "rock"){
                if(humanChoice == "paper"){
                    determineWinnerRound("human");
                } else {
                    determineWinnerRound("computer");
                }
            } else if(computerChoice == "paper"){
                if(humanChoice == "scissor"){
                    determineWinnerRound("human");
                } else {
                    determineWinnerRound("computer");
                }
            } else {
                if(humanChoice == "rock"){
                    determineWinnerRound("human");
                } else {
                    determineWinnerRound("computer");
                }
            }
        }
    }

    if ((humanPoints + computerPoints + draws) == 5){
        determineWinnerGame();
    }
}

const ROCK = document.querySelector("#rock");
const PAPER = document.querySelector("#paper");
const SCISSOR = document.querySelector("#scissor");
const SHOW_RESULTS = document.querySelector("#showResult");

ROCK.addEventListener("click", () => playRound("rock"));
PAPER.addEventListener("click", () => playRound("paper"));
SCISSOR.addEventListener("click", () => playRound("scissor"));

