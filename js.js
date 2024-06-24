function getComputerChoice(){
    number = Math.random();
    if(number >= 0 && number < 0.33){
        return "rock";
    }
    if(number >= 0.33 && number < 0.66){
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