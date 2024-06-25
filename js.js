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

function playGame(){
    for(i = 0; i < 5; i++){
        playRound();
        console.log("");
    }
    console.log("Human points: " + humanPoints);
    console.log("Computer points: " + computerPoints);
    if(humanPoints > computerPoints){
        console.log("Human is the winner");
    } else{
        console.log("Computer is the winner");
    }
}
