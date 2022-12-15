/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

let totalScore = { playerScore: 0, computerScore: 0 };

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else score = -1;
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
let hands = document.getElementById("hands");
let result = document.getElementById("result");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
function showResult(score, playerChoice, computerChoice) {
  playerScore.innerHTML = `Me: ${totalScore["playerScore"]}`;
  computerScore.innerHTML = `Computer: ${totalScore["computerScore"]}`;
  hands.innerHTML = `🧑 ${playerChoice} VS. 🖥️ ${computerChoice}`;
  if (score === -1) {
    result.innerHTML = "You Lose!";
  } else if (score === 1) {
    result.innerHTML = "You Win!";
  } else result.innerHTML = "It's a Draw!";
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice();
  let score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  totalScore["computerScore"] -= score;
  return showResult(score, playerChoice, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  let btns = document.querySelectorAll(".rpsButton");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      onClickRPS(btn.value);
    });
  });

  let endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;
  hands.innerHTML = "";
  result.innerHTML = "";
  playerScore.innerHTML = "";
  computerScore.innerHTML = "";
}

playGame();
