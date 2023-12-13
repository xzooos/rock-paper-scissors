function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber === 0) ? 'rock':
    (randomNumber === 1) ? 'paper':
    'scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(`Computer chooses ${computerSelection}!`)
    console.log(`You choose ${playerSelection}!`);

    if (playerSelection === computerSelection) {
        console.log("It's a tie! Starting another round...")
        return playRound(playerSelection, getComputerChoice());
    }

    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));