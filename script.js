// Simple one-function solution for Unit 8.4

// Global state (persist across button clicks)
var secret = Math.floor(Math.random() * 10) + 1; // 1..10
var tries = 0;

// Build the hint list ONCE at page load using a for loop.
// <script defer> guarantees the DOM is ready when this runs.
var hintListEl = document.getElementById("hintList");
hintListEl.innerHTML = "";
for (var i = 1; i <= 10; i++) {
  hintListEl.innerHTML += "<li>" + i + "</li>";
}

function runJS() {
  var guessInput = document.getElementById("guess");
  var feedbackEl = document.getElementById("feedback");
  var triesEl = document.getElementById("tries");

  var guess = Number(guessInput.value);

  // Validate: must be a number 1..10
  if (isNaN(guess) || guess < 1 || guess > 10) {
    feedbackEl.textContent = "Invalid: enter a number 1–10.";
    return; // do NOT increment tries on invalid
  }

  // Valid guess → increment tries
  tries = tries + 1;
  triesEl.textContent = String(tries);

  // Selection logic
  if (guess === secret) {
    feedbackEl.textContent = "You win! The number was " + secret + ".";
  } else if (guess > secret) {
    feedbackEl.textContent = "Too high.";
  } else {
    feedbackEl.textContent = "Too low.";
  }
}
