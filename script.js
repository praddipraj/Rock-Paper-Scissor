let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    updateScoreboard();
}

function updateScoreboard() {
    document.getElementById('scoreboard').innerHTML = `
        <p>Player Score: ${playerScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('result').innerText = "";
    updateScoreboard();
}
