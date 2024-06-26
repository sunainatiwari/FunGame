// Snake Water Gun Game
let userScore = 0;
let compScore = 0;
const options = ["snake", "water", "gun"];

function generateCompChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playGame(userCh) {
    const compCh = generateCompChoice();
    displayChoice(userCh, compCh);

    if (userCh === compCh) {
        setResult("Match draw");
    } else {
        if ((userCh === "snake" && compCh === "water") ||
            (userCh === "water" && compCh === "gun") ||
            (userCh === "gun" && compCh === "snake")) {
            userScore++;
            setResult("You won");
        } else {
            compScore++;
            setResult("You lost");
        }
    }
    updateScore();
}

function displayChoice(userCh, compCh) {
    document.getElementById("userChoice").textContent = userCh;
    document.getElementById("compChoice").textContent = compCh;
}

function setResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
    if (result === "You won") {
        resultElement.className = "result text-green-800 bg-green-200";
    } else if (result === "You lost") {
        resultElement.className = "result text-red-800 bg-red-200";
    } else {
        resultElement.className = "result text-violent-800 bg-violent-200";
    }
}

function updateScore() {
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("compScore").textContent = compScore;
}

function handleRestart() {
    userScore = 0;
    compScore = 0;
    setResult("");
    displayChoice("", "");
    updateScore();
}

function showFrontBox() {
    document.getElementById("snakeWaterGunGame").style.display = 'none';
    document.getElementById("guessGame").style.display = 'none';
    document.getElementById("frontBox").style.display = 'flex';
}

// Guess Number Game
let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let gameOver = false;

function handleGuess() {
    if (gameOver) return;
    const guessInput = document.getElementById("guessInput").value;
    const numericGuess = parseInt(guessInput, 10);
    attempts++;
    if (numericGuess === randomNumber) {
        setMessage(`Correct! You guessed the number in ${attempts} attempts.`);
        gameOver = true;
    } else if (numericGuess < randomNumber) {
        setMessage('Too low! Try again.');
    } else {
        setMessage('Too high! Try again.');
    }
    document.getElementById("guessInput").value = '';
}

function setMessage(message) {
    document.getElementById("message").textContent = message;
}

function handleRestartGuess() {
    document.getElementById("guessInput").value = '';
    setMessage('');
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    gameOver = false;
}

function showGame(gameId) {
    document.getElementById("frontBox").style.display = 'none';
    document.getElementById("snakeWaterGunGame").style.display = 'none';
    document.getElementById("guessGame").style.display = 'none';
    document.getElementById(gameId).style.display = 'block';
}
