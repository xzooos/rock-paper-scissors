function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber === 0) ? 'rock':
    (randomNumber === 1) ? 'paper':
    'scissors';
}

function playRound(playerSelection, computerSelection) {
    console.log(`You choose: ${playerSelection}!`);
    console.log(`Computer chooses: ${computerSelection}!`);
    playerSelection = playerSelection.toLowerCase();

    if ((computerSelection === playerSelection)) {
        console.log("It's a tie! Let's play another round...");
        return playRound(prompt(`Choose again: rock, paper or scissors?`,"").toLowerCase(), getComputerChoice());
    } else if ((computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection = prompt("What is your choice: rock, paper or scissors?", "");
        playerSelection = playerSelection.toLowerCase();
        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            playerSelection = prompt(`Invalid input! Please carefully choose again: rock, paper or scissors?`,"").toLowerCase();
        }
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.indexOf('You win') === -1) {
            computerScore++;
        } else {
            playerScore++;
        }
    }
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log(`Congratulations, you win the game!`);
    } else {
        console.log(`Aww, you lose the game! Better luck next time!`);
    }
}

game();