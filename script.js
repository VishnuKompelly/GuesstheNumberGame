let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber)
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.....";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.....";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulation! You got it right...";
        gameResult.style.color = "green";
    } else {
        gameResult.textContent = "Please provide valid number";
        gameResult.style.color = "red";
    }

}
