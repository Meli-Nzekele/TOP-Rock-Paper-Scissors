let player_score_span = document.getElementById("player-score");
let computer_score_span = document.getElementById("computer-score");

const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");
const result = document.getElementById("result");
result.innerHTML = "Select an option below to start the game!";
const message = document.getElementById("sub-rule");
const reset_btn = document.getElementById("reset");

rock_btn.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});
paper_btn.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});
scissors_btn.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  const choices_array = ["rock", "paper", "scissors"];

  let randomIndex = Math.floor(Math.random() * 3);
  let computer_choice = choices_array[randomIndex];
  return computer_choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    player_score_span.innerHTML = playerScore;
    result.innerHTML = `You win: ${playerSelection} > ${computerSelection}`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerScore++;
    computer_score_span.innerHTML = computerScore;
    result.innerHTML = `You Lose: ${playerSelection} < ${computerSelection}`;
  } else if (
    (playerSelection && computerSelection === "rock") ||
    (playerSelection && computerSelection === "paper") ||
    (playerSelection && computerSelection === "scissors")
  ) {
    result.innerHTML = `It's a draw: ${playerSelection} === ${computerSelection}`;
  }

  if (computerScore >= 5) {
    result.innerHTML = "Sorry, you lost this Game!";
    message.innerHTML = "CLICK RESET TO PLAY AGAIN!";
  } else if (playerScore >= 5) {
    result.innerHTML = "Congratulations, you won this Game!";
    message.innerHTML = "CLICK RESET TO PLAY AGAIN!";
  }
}

reset_btn.addEventListener("click", () => resetGame());

function resetGame() {
  playerScore = 0;
  player_score_span.innerHTML = 0;
  computerScore = 0;
  computer_score_span.innerHTML = 0;
  result.innerHTML = "Select an option below to start the game!";
  message.innerHTML = "FIRST TO A SCORE OF FIVE WINS";
}
