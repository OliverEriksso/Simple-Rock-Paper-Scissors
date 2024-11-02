let humanScore = 0;
let computerScore = 0;

const totalScore = document.getElementById("score")
const pressPlayBtn = document.getElementById("press-play")

const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")



function getComputerChoice() {
    const i = Math.floor(Math.random() * 3)
    if (i === 0) {
        return "rock";
    } else if (i === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* function getHumanChoice() { // NO LONGER NEEDED NOW WHEN THE ROUND IS PLAYED ON BUTTON CLICK
    /* if (rockBtn.addEventListener('click', () => {                          // Experimental, THIS DID NOT WORK
        return "rock";
    })); else if (paperBtn.addEventListener('click', () => {
        return "paper";
    })); else if (scissorsBtn.addEventListener('click', () => {
        return "paper";
    })); else {
        return undefined;
    } */ 
    /* let input = prompt("Rock, paper or scissors?").toLowerCase()           //THIS WAS THE OLD PROMPT VERSION
    while (input !== "rock" && input !== "paper" && input !== "scissors") {
        input = prompt("Invalid input, it's Rock, Paper or Scissors ")
    }
    return input; 
} */ 
rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));

function playRound(humanChoice = 0, computerChoice = 0) {
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);


    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++
    } 
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++
    } 
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper");
        humanScore++
    } 
    else { 
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    }
    updateScore();
}

/* function playGame(rounds) { // NO LONGER NEEDED
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Winner winner Chicken dinner!");
    } else if (humanScore < computerScore) {
        console.log("You lost! Loser!");
    } else {
        console.log("It's a tie!");
    }
} */


pressPlayBtn.addEventListener('click', () => {
    // playGame(1);
    pressPlayBtn.style.display = 'none';
    rockBtn.style.display = 'block';
    paperBtn.style.display = 'block';
    scissorsBtn.style.display = 'block';
})

function updateScore() {
    totalScore.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
}
updateScore()



