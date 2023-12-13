function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber === 0) ? 'rock':
    (randomNumber === 1) ? 'paper':
    'scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(`You choose: ${playerSelection}!`);
    console.log(`Computer chooses: ${computerSelection}!`);

    if ((computerSelection === playerSelection)) {
        console.log("It's a tie! Let's play another round...");
        return playRound(playerSelection, getComputerChoice());
    } else if ((computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("What is your choice: rock, paper or scissors?", "");
console.log(playRound(playerSelection, computerSelection));