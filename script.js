
const options = document.querySelector("#optionsContainer")
const roundInfo = document.querySelector("#round-info")
const yourScoreInfo = document.querySelector("#your-score-info")
const compScoreInfo = document.querySelector("#computer-score-info")
const tiesInfo = document.querySelector("#ties-info")
const computerSelection = document.querySelector("#compSelection")
const bottomText = document.querySelector("#bottomTextDiv")

let humanScore = 0;
let computerScore = 0;
let tie = 0;
let round = 0;



// Options handler --> EVENT DELEGATION !!
options.addEventListener("click", buttonClick)




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
    computerSelection.textContent = computer.toUpperCase()
    yourScoreInfo.textContent = humanScore
    compScoreInfo.textContent = computerScore
    tiesInfo.textContent = tie


}


function buttonClick(e){

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

    if (round == 10) {

        let finishText = document.createElement("h3")

        if (humanScore > computerScore) {
            finishText.textContent = "You win!"
        }
        else if (computerScore > humanScore) {
            finishText.textContent = "Computer wins!"
        }
        else {
            finishText.textContent = "Its a tie!"
        }
        
        
        
        finishText.style.color = "green"
        bottomText.appendChild(finishText)
        options.removeEventListener("click", buttonClick)
        return;
    }


}