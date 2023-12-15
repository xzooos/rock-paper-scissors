function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber === 0) ? 'rock':
    (randomNumber === 1) ? 'paper':
    'scissors';
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
    } else {
        console.log(`Aww, you lose the game! Better luck next time!`);
    }
}

function askForInput() {
    return prompt('Choose one: rock, paper or scissors?', "").toLowerCase();
}

game();