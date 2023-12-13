function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber === 0) ? 'rock':
    (randomNumber === 1) ? 'paper':
    'scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `It's a tie! Both users chose ${playerSelection}!`;
    }
}