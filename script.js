function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerSelection, playerSelection) {
    if ((computerSelection === 'Rock' && playerSelection === 'Paper') ||
    (computerSelection === 'Paper' && playerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && playerSelection === 'Rock')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if ((computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')) {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `It's a tie! Play another round!`;
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScoreContainer = document.querySelector('#playerScoreContainer');
const computerScoreContainer = document.querySelector('#computerScoreContainer');
const resultContainer = document.querySelector('#resultContainer');
const displayWinner = document.querySelector('#displayWinner');

let computerScore = 0;
let playerScore = 0;

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function buttonClicked(event) {
    let computerSelection = computerChoice();
    let playerSelection = event.target.id;
    computerSelection = capitalize(computerSelection);
    playerSelection = capitalize(playerSelection);
    const result = playRound(computerSelection, playerSelection);

    if (result.includes('You win')) {
        playerScore++;
    } else if (result.includes('You lose')) {
        computerScore++;
    }

    playerScoreContainer.textContent = `Player: ${playerScore}`;
    computerScoreContainer.textContent = `Computer: ${computerScore}`;
    resultContainer.textContent = result;

    if (computerScore === 5 || playerScore === 5) checkWinner();
}

function checkWinner() {
    if (computerScore < playerScore) {
        displayWinner.textContent = 'Congratulations, Player wins the game!';
    } else if (computerScore > playerScore) {
        displayWinner.textContent = 'Aww, Player loses! Computer wins the game!';
    }
    playerScore = 0; computerScore = 0;
}

rock.addEventListener('click', buttonClicked);
paper.addEventListener('click', buttonClicked);
scissors.addEventListener('click', buttonClicked);