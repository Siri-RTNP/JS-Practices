"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let countGuess = 20;
let highScore = 0;

console.log(`The secret number is ${secretNumber}`);

function displayMessage(message) {
  return (document.querySelector(".message").textContent = message);
}

function changeBackgroundColor(color) {
  return (document.querySelector("body").style.backgroundColor = color);
}

function disabledButton(Boolean) {
  document.querySelector(".check").disabled = Boolean;
}

function resetGame() {
  countGuess = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = ""; //clear input field
  document.querySelector(".score").textContent = countGuess;
  document.querySelector(".highscore").textContent = highScore;
  displayMessage("Start guessing...");
  changeBackgroundColor("#222");
  disabledButton(false);
  console.log(`The new secret number is ${secretNumber}`);
}

document.querySelector(".again").addEventListener("click", resetGame);
// call function here, no need () after function name

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  console.log(`The guess number is ${guessNumber}`);

  if (!guessNumber) {
    displayMessage("⛔ No number!");
    changeBackgroundColor("#c0a404");
    // document.querySelector(".message").textContent = "⛔ No a number!";
  } else if (guessNumber === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct number!");
    changeBackgroundColor("#60b347");
    disabledButton(true);
    countGuess > highScore ? (highScore = countGuess) : "";
    document.querySelector(".highscore").textContent = highScore;
    // document.querySelector(".message").textContent = "🎉 Correct number!";
    // document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guessNumber !== secretNumber) {
    countGuess--;
    document.querySelector(".score").textContent = countGuess;

    if (countGuess > 0) {
      if (guessNumber > 20 || guessNumber < 0) {
        displayMessage("🙈 Guess between 1-20!");
        changeBackgroundColor("#c0a404");
        // document.querySelector(".message").textContent = "🙈 Guess between 1-20 !";
        // document.querySelector("body").style.backgroundColor = "#c0a404";
      } else if (guessNumber > secretNumber) {
        highScore = guessNumber;
        displayMessage("📈 Too high!");
        changeBackgroundColor("#e44f4f");
        //  document.querySelector(".message").textContent = "📈 Too high!";
        //  document.querySelector("body").style.backgroundColor = "#e44f4f";
      } else if (guessNumber < secretNumber) {
        displayMessage("📉 Too low!");
        changeBackgroundColor("#e44f4f");
        //  document.querySelector(".message").textContent = "📉 Too low!";
        //  document.querySelector("body").style.backgroundColor = "#e44f4f";
      }
    } else if (countGuess === 0) {
      displayMessage("💣 Game Over");
      changeBackgroundColor("#e44f4f");
      disabledButton(true);
    }
  }
});
