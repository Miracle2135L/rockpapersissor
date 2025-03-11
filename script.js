let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sissor = document.getElementById("sissor");
let showResult = document.getElementById("result");

let choices = ["rock","paper","sissor"];
let result;

let userChoice;
let botChoice;

let choose = (e) => {
    botChoice = choices[Math.floor(Math.random() * 3)];
    userChoice = e.target.id;
    if (userChoice == "rock" && botChoice == "paper") {
        result = "you lose";
    } else if (userChoice == "paper" && botChoice == "sissor"){
        result = "you lose";
    } else if (userChoice == "sissor" && botChoice == "rock"){
        result = "you lose";
    } else if (userChoice == botChoice) {
        result = "it's draw";
    }else{
        result = "you won";
    }
    showResult.innerText = result + ", bot choosed : " + botChoice;
}

rock.onclick = choose;
paper.onclick = choose;
sissor.onclick = choose;