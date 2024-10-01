const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function getHumanChoice() {
    let humanChoice = prompt("You choose...").toLowerCase();
    if (choices.includes(humanChoice)) {
        return humanChoice;
    }
    else {
        alert("must be one of the following: rock, paper, scissors");
        getHumanChoice()
    }
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
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


function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundScore = playRound(humanChoice,computerChoice);
        if (roundScore === 1) {
            humanScore++;
        }
        else if (roundScore === -1) {
            computerScore++;
        }
    }
    console.log(`human: ${humanScore}\ncomputer: ${computerScore}`)
}


playGame();