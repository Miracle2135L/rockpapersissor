let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sissor = document.getElementById("sissor");
let showResult = document.getElementById("result");

let choices = ["rock","paper","sissor"];
let result;

let userChoice;

let choose = (e) => {
    userChoice = e.target.id;
    console.log("you choose "+userChoice);
    if (userChoice == "rock" && botChoice == "paper") {
        result = "you lose";
    } else if (userChoice == "paper" && botChoice == "sissor"){
        result = "you lose";
    } else if (userChoice == "sissor" && botChoice == "rock"){
        result = "you lose";
    } else if (userChoice == botChoice) {
        result = "draw";
    }else{
        result = "you won";
    }
    showResult.innerText = result + " bot : " + botChoice;
}

rock.onclick = choose;
paper.onclick = choose;
sissor.onclick = choose;



let botChoice = choices[Math.floor(Math.random() * 3)];

