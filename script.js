let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sissor = document.getElementById("sissor");
let showResult = document.getElementById("result");
let pScore = document.getElementById("pscore");
let bScore = document.getElementById("bscore");

let choices = ["rock","paper","sissor"];
let result;

let userChoice;
let botChoice;

let botScore = 0;
let playerScore = 0;

let choose = (e) => {
    botChoice = choices[Math.floor(Math.random() * 3)];
    userChoice = e.target.id;
    if (userChoice == "rock" && botChoice == "paper") {
        result = "you lose";
        botScore++;
    } else if (userChoice == "paper" && botChoice == "sissor"){
        result = "you lose";
        botScore++;
    } else if (userChoice == "sissor" && botChoice == "rock"){
        result = "you lose";
        botScore++;
    } else if (userChoice == botChoice) {
        result = "it's draw";
    }else{
        result = "you won";
        playerScore++;
    }
    showResult.innerText = "result: " + result + ", bot choosed " + botChoice;
    pScore.innerText = "your score: " + playerScore;
    bScore.innerText = "computer's score: " + botScore;
}

rock.onclick = choose;
paper.onclick = choose;
sissor.onclick = choose;