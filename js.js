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
