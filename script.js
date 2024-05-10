
const options = document.querySelector("#optionsContainer")
const roundInfo = document.querySelector("#round-info")
const yourScoreInfo = document.querySelector("#your-score-info")
const compScoreInfo = document.querySelector("#computer-score-info")


// Options handler --> EVENT DELEGATION !!
options.addEventListener("click", function (e) {

    let compChoice = getComputerChoice()
    
    let target = e.target; //applies the target method on the event object to return the node

    switch (target.id) { // Checks and the id to see which button was pressed
        

        case "optRock":
            playRound("rock",compChoice)
            break;
        case "optPaper":
            playRound("paper",compChoice)
            break;
        case "optScissors":
            playRound("scissors",compChoice)
            break;
    }


})

let humanScore = 0;
let computerScore = 0;
let tie = 0;
let round = 0;

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

    round += 1;

    roundInfo.textContent = round
    


}

/*
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



