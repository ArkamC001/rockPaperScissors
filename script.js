

let humanScore = 0;
let computerScore = 0;
let tie = 0;

let x = getComputerChoice();
let y = getHumanChoice();

console.log(`The Computer choice is ${x}`)
console.log(`Your choice is ${y}`)


checkWinner(y,x);



function getComputerChoice() {

    let x = Math.floor(Math.random()*3 + 1);
    
    switch (x) {

        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }


}

function getHumanChoice(){

   let choice =  prompt("What is your choice: ");

    return choice.toLowerCase();
}

function checkWinner(human, computer) {
    
    if (human == computer){

        console.log("Its a tie!")

    }

    else if (human == "rock" && computer == "paper")
    {
        
        console.log("You Lose!")

    }
    
    else if (human == "rock" && computer == "scissors")
    {
        
        console.log("You Win!")

    }
    
    else if (human == "paper" && computer == "rock")
    {
        
        console.log("You Win!")

    }
    
    else if (human == "paper" && computer == "scissors")
    {
        
        console.log("You Lose!")

    }
    else if (human == "scissors" && computer == "rock")
    {
        
        console.log("You Lose!")

    }
    else if (human == "scissors" && computer == "paper")
    {
        
        console.log("You Win!")

        }




}
