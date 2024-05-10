
const rockButton = document.querySelector(".optRock")


// Rock button handler
rockButton.addEventListener("click", function () {
    
console.log("rock button clicked")


})








/*

let humanScore = 0;
let computerScore = 0;
let tie = 0;

//playGame()

function getComputerChoice() {

    let x = Math.floor(Math.random()*3 + 1); // Generates a random number from 1 - 3
    
    switch (x) {

        case 1:
            return "rock";   // Based on number generated (1, 2 or 3), assign it to a string 
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

function playRound(human, computer) {
    
    if (human == computer){

        console.log("Its a tie!")
        tie += 1;
        

    }

    else if (human == "rock" && computer == "paper")
    {
        
        console.log("You Lose!")
        computerScore += 1

    }
    
    else if (human == "rock" && computer == "scissors")
    {
        
        console.log("You Win!")
        humanScore += 1

    }
    
    else if (human == "paper" && computer == "rock")
    {
        
        console.log("You Win!")
        humanScore += 1

    }
    
    else if (human == "paper" && computer == "scissors")
    {
        
        console.log("You Lose!")
        computerScore += 1

    }
    else if (human == "scissors" && computer == "rock")
    {
        
        console.log("You Lose!")
        computerScore += 1

    }
    else if (human == "scissors" && computer == "paper")
    {
        
        console.log("You Win!")
        humanScore += 1

        }




}

function playGame() {

    let i = 0;

    while (i < 5)
    
    { 

        let compChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(humanChoice, compChoice)

        i += 1
        
        }

    console.log("Game Done!")

    console.log(`Human Wins: ${humanScore}`)
    console.log(`Computer Wins: ${computerScore}`)
    console.log(`Ties: ${tie}`)

    
}

*/



