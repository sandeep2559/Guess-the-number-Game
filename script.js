let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(secretNumber);
const checkStatus = function(status) {
    document.querySelector("#first").textContent = status;
    score--;
    document.querySelector(".score").textContent = score;
};
document.querySelector(".btn").addEventListener("click", () => {
    const guess = Number(document.querySelector("#guess").value);
    console.log(guess, typeof guess);
    if (guess === secretNumber) {
        document.querySelector("#first").textContent = "Correct Answer";

        document.querySelector(".mm").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "green";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".high").textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        checkStatus(guess > secretNumber ? "Too High" : "Too Low");
    }
});

document.querySelector(".again").addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("#first").textContent = "Start guessing...";

    document.querySelector(".mm").textContent = "?";
    score = 20;
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
});