function getComputerChoice() {
    const randomChoice = ['rock', 'paper', 'scissors'];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else return "It's a tie!";
}

// UI

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultContainer = document.querySelector('#container');
const scoreContainter = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

function buttonClicked(event) {
    const computerSelection = getComputerChoice();
    const playerSelection = event.target.id;
    const result = playRound(computerSelection, playerSelection);

    if (result.includes("You win")) {
        playerScore++;
    } else if (result.includes("You lose")) {
        computerScore++;
    }
    resultContainer.textContent = result;
    scoreContainter.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        checkWinner();
    }
}

function checkWinner() {
    if (playerScore > computerScore) {
        resultContainer.textContent = "Congratulations, you win the game!";
    } else {
        resultContainer.textContent = "Aww, you lose the game! Better luck next time!";
    }
    playerScore = 0;
    computerScore = 0;
}

rock.addEventListener('click', buttonClicked);
paper.addEventListener('click', buttonClicked);
scissors.addEventListener('click', buttonClicked);