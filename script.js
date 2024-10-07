const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let humanScore = 0;
let computerScore = 0;

const you = document.querySelector(".youChoice");
const opponent = document.querySelector(".opponentChoice");


const score = document.querySelector(".score");
score.textContent = `${humanScore}:${computerScore}`;

const buttons = document.querySelectorAll("button");
let round = 0;

function playRound(humanChoice, computerChoice) {
    you.textContent = `${humanChoice}`;
    opponent.textContent = `${computerChoice}`;

    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("You're tied!");
        return 0;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!");
        return -1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors!");
        return 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock!");
        return 1;
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("You're tied!");
        return 0;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat paper!");
        return -1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!");
        return -1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat paper!");
        return 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("You're tied!");
        return 0;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let outcome = playRound(button.className, getComputerChoice());
        if (outcome === 1) humanScore++;
        else if (outcome === -1) computerScore++;
        score.textContent = `${humanScore}:${computerScore}`;
        round++;

        if (round === 5) {
            if (humanScore > computerScore) alert("You win!");
            else if (computerScore > humanScore) alert("You lose!");
            else alert("You're tied!");

            round = 0;
            humanScore = 0;
            computerScore = 0;

            score.textContent = `${humanScore}:${computerScore}`;
            you.textContent = "";
            opponent.textContent = "";
            }
    })
})