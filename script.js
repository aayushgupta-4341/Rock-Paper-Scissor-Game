let userScore = 0;
let compScore = 0;

const result = document.getElementById("result");
const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");
const toggle = document.getElementById("toggle");
function play(userChoice){
const choices = ["rock","paper","scissors"];
const compChoice = choices[Math.floor(Math.random()*3)];

let res = "";
if(userChoice === compChoice){
res = "😐 Draw!";
}
else if(
(userChoice === "rock" && compChoice === "scissors") ||
(userChoice === "paper" && compChoice === "rock") ||
(userChoice === "scissors" && compChoice === "paper")
){
res = "🎉 You Win!";
userScore++;
}else{
res = "😢 You Lose!";
compScore++;
}

result.innerText = `You: ${userChoice} | Computer: ${compChoice} → ${res}`;
userScoreEl.innerText = userScore;
compScoreEl.innerText = compScore;
}

// RESET
function resetGame(){
userScore = 0;
compScore = 0;
userScoreEl.innerText = 0;
compScoreEl.innerText = 0;
result.innerText = "Choose your move!";
}

// THEME TOGGLE
toggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
if(document.body.classList.contains("dark")){
toggle.innerText = "🌙";
}else{
toggle.innerText = "☀️";
}
});