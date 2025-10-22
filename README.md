# Unit 8.4 – Iteration: Guessing Game 🎯

## Overview
Build a small web app where the user **guesses a number 1–10**.  
Use **iteration** (loops) and **selection** (if/else logic) to compare the user’s guess with a secret answer and display feedback on the page.

> You must use **input fields and `textContent` updates** on the page — **no** `prompt()` or `alert()`.

---

## Requirements

### 1) UI Elements
Add these to your `index.html`:
- An input for the guess: `<input id="guess" type="number">`
- A button that calls your function (e.g., `runJS()`): `<button onclick="runJS()">Guess</button>`
- A feedback area you will update: `<p id="feedback"></p>`
- A visible tries counter: `<p id="tries">0</p>`
- A container for a hint list: `<ul id="hintList"></ul>` (see the for-loop task)

### 2) JavaScript: Iteration & Selection
In `script.js`, write a function named `runJS()` that:
- Reads the user’s input **number** from `#guess` (use `Number(...)`).
- Compares the guess to a secret answer (1–10) using **if/else**.
- Updates **`#feedback`** with messages like “Too high”, “Too low”, or “You win!” using `textContent`.
- Increments and displays the number of tries in **`#tries`** on each **valid** guess.

> Store the secret answer and the tries count so they persist across button clicks.

### 3) Input Validation
- If the input is **not a number** or **outside 1–10**, show a message that includes the word **“invalid”** in **`#feedback`**.
- Do **not** use `prompt()` or `alert()`; use on-page inputs and text updates.

### 4) For-Loop Task (Mini Task)
- Use a **for loop** to populate **`#hintList`** with the numbers **1..10** at page load or the first time the user plays.

---

## Hints (no solutions)
- Convert input strings to numbers with `Number(...)`.
- Update the page with `element.textContent = "...";`.
- Use `Math.floor(Math.random()*10)+1` to create a secret number in 1–10.
- Use iteration to build your hint list (e.g., create 10 list items or a string containing 1..10).
- Keep a **tries** counter that increases with each valid guess.

---

## What We’re Grading
- **UI present:** `#guess`, `#feedback`, `#tries`, and `#hintList`
- **No prompts/alerts:** you’re using input + DOM updates
- **Invalid input** shows an “invalid” message
- **Selection logic** correctly distinguishes too low / too high / win
- **Tries** increases on each valid guess
- **For loop** populates `#hintList` with 1..10

---

## Getting Started
1. Create `index.html` and `script.js`.
2. Link your script in the HTML:  
   `<script src="script.js" defer></script>`
3. Add the required elements and write `runJS()` in `script.js`.

> When you push, the Classroom autograder will run and show ✅/❌ for each check in the workflow summary. The job is green only when all checks pass.
