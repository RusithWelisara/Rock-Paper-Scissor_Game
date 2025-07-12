let playerScore = 0;
let computerScore = 0;
let wonCount = 0;
let lostCount = 0;
let drawCount = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a draw!";
    drawCount++;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    playerScore++;
    wonCount++;
  } else {
    result = 'You lose!';
    computerScore++;
    lostCount++;
  }

  document.getElementById('result-message').textContent = 
    `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;

  updateScores();
  checkGameOver();
}

function updateScores() {
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('won-count').textContent = wonCount;
  document.getElementById('lost-count').textContent = lostCount;
  document.getElementById('draw-count').textContent = drawCount;
}

function checkGameOver() {
  if (playerScore >= 5 || computerScore >= 5) {
    const finalResult = playerScore > computerScore ? 'Congratulations, You Won!' : 'Sorry, You Lost!';
    document.getElementById('final-result').textContent = finalResult;
    document.getElementById('game-over').style.display = 'block';
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  wonCount = 0;
  lostCount = 0;
  drawCount = 0;
  document.getElementById('result-message').textContent = 'Select your weapon!';
  document.getElementById('game-over').style.display = 'none';
  updateScores();
}