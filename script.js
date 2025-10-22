var secret;
var tries = 0;
var gameStarted = false;

function runJS() {
  var feedback = document.getElementById("feedback");
  var triesDisplay = document.getElementById("tries");
  var hintList = document.getElementById("hintList");
  var guessInput = document.getElementById("guess");
  var button = document.querySelector("button");

  // --- Start the game if not started yet ---
  if (!gameStarted) {
    secret = Math.floor(Math.random() * 10) + 1;
    tries = 0;
    gameStarted = true;
    feedback.textContent = "Game started! Enter a number 1–10.";
    triesDisplay.textContent = tries;
    button.textContent = "Guess";
    guessInput.value = "";
    guessInput.disabled = false; 

    // Show hints using a for loop
    hintList.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
      hintList.innerHTML += "<li>" + i + "</li>";
    }
    return;
  }

  // --- Check the guess ---
  var guess = Number(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 10) {
    feedback.textContent = "Invalid input! Please enter a number 1–10.";
    return;
  }

  // --- While loop: keep checking until correct ---
  while (guess !== secret) {
    tries++;
    triesDisplay.textContent = tries;

    if (guess > secret) {
      feedback.textContent = "Too high! Try again.";
    } else {
      feedback.textContent = "Too low! Try again.";
    }
    return; // exit until they make a new guess
  }

  // --- If correct, show win message and reset game ---
  tries++;
  triesDisplay.textContent = tries;
  feedback.textContent = "🎉 You win! The number was " + secret + ". Starting a new game...";
  gameStarted = false;
  button.textContent = "Start New Game";
  guessInput.value = "";
  guessInput.disabled = true; 
}
