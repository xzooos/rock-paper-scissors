function getComputerChoice() {
    const randomChoice = ['rock', 'paper', 'scissors'];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

function playRound(playerSelection, computerSelection) {
    console.log(`You choose: ${playerSelection}!`);
    console.log(`Computer chooses: ${computerSelection}!`);

    if ((computerSelection === playerSelection)) {
        console.log("It's a tie! Let's play another round...");
        return playRound(askForInput(), getComputerChoice());
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
    const n = 5;

    for (let i = 1; i <= n; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection = askForInput();

        if (playerSelection === null) {
            console.log("Game cancelled.");
            break;
        }

        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            console.log("Invalid input!");
            playerSelection = askForInput();
        }

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("You win")) {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log(`Congratulations, you win the game!`);
    } else if (computerScore > playerScore) {
        console.log(`Aww, you lose the game! Better luck next time!`);
    }
}

function askForInput() {
    const input = prompt('Choose one: rock, paper or scissors?', "");
    return input !== null ? input.toLowerCase() : null;
}

game();