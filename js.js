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

function getHumanChoice(){
    do{
        choice = prompt("Rock, paper or scissor?").toLowerCase();
    } while(choice != "rock" && choice != "paper" && choice != "scissor");
    return choice;
}

function playRound(){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    console.log(humanChoice);
    console.log(computerChoice);

    if(computerChoice == humanChoice){
        draws++;
        return "Draw";
    } else {
        if(computerChoice == "rock"){
            if(humanChoice == "paper"){
                humanPoints++;
                return "Human wins";
            } else {
                computerPoints++;
                return "Computer wins";
            }
        } else if(computerChoice == "paper"){
            if(humanChoice == "scissor"){
                humanPoints++;
                return "Human wins";
            } else {
                computerPoints++;
                return "Computer wins";
            }
        } else {
            if(humanChoice == "rock"){
                humanPoints++;
                return "Human wins";
            } else {
                computerPoints++;
                return "Computer wins";
            }
        }
    }
}

console.log(playRound());