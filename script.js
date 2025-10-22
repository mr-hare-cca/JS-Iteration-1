// One button + one function, with both a for loop (hints) and a while loop (checking)
var secret;
var tries = 0;
var gameStarted = false;

function runJS() {
  var feedback = document.getElementById("feedback");
  var triesEl = document.getElementById("tries");
  var hintList = document.getElementById("hintList");
  var input = document.getElementById("guess");
  var btn = document.querySelector("button");

  // START GAME
  if (!gameStarted) {
    secret = Math.floor(Math.random() * 10) + 1; // 1..10
    tries = 0;
    triesEl.textContent = "0";
    gameStarted = true;

    // enable input, clear it
    input.disabled = false;
    input.value = "";

    // show hints with a for loop
    hintList.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
      hintList.innerHTML += "<li>" + i + "</li>";
    }

    feedback.textContent = "Game started! Enter a number 1–10.";
    btn.textContent = "Guess";
    return;
  }

  // CHECK GUESS
  var guess = Number(input.value);
  if (isNaN(guess) || guess < 1 || guess > 10) {
    feedback.textContent = "Invalid input! Please enter a number 1–10.";
    return; // don't count invalid tries
  }

  // while loop: keep checking logic across button presses
  while (guess !== secret) {
    // valid guess → count it
    tries += 1;
    triesEl.textContent = String(tries);

    if (guess > secret) {
      feedback.textContent = "Too high";
    } else {
      feedback.textContent = "Too low";
    }
    return; // wait for the next guess/click
  }

  // WIN
  tries += 1;
  triesEl.textContent = String(tries);
  feedback.textContent = "You win! Correct number. Starting a new game…";
  input.disabled = true;        // disable after win (autograder checks this)
  btn.textContent = "Start New Game";
  gameStarted = false;          // next click restarts
  input.value = "";
}
