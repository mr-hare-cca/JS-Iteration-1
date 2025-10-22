// add javascript here
var secret = Math.floor(Math.random() * 10) + 1;
var tries = 0;

function runJS() {
  var guess = Number(document.getElementById("guess").value);
  var feedback = document.getElementById("feedback");
  var triesText = document.getElementById("tries");
  var hintList = document.getElementById("hintList");

  // Step 1: Show hints 1–10 using a for loop
  hintList.innerHTML = "";
  for (var i = 1; i <= 10; i++) {
    hintList.innerHTML += "<li>" + i + "</li>";
  }

  // Step 2: Validate input
  if (isNaN(guess) || guess < 1 || guess > 10) {
    feedback.textContent = "Invalid: enter a number 1–10.";
    return;
  }

  // Step 3: Count tries
  tries++;
  triesText.textContent = tries;

  // Step 4: Selection logic
  if (guess === secret) {
    feedback.textContent = "You win! The number was " + secret + ".";
  } else if (guess > secret) {
    feedback.textContent = "Too high.";
  } else {
    feedback.textContent = "Too low.";
  }
}