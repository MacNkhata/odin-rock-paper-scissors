// const getComputerChoice = () => {
//   let choices = ["rock", "paper", "scissors"];
//   const choice = Math.floor(Math.random() * 3);

//   return choices[choice];
// };

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, Scissors?");
  if (choice !== null) {
    return choice;
  }
}
// let choice = getHumanChoice();
// console.log(choice);

function playRound(humanChoice, computerChoice) {
  let lowerCaseHumanChoice = humanChoice.toLowerCase();
  if (lowerCaseHumanChoice === computerChoice) {
    console.log("Tie!!!");
  } else if (lowerCaseHumanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("Human Won!!!");
      humanScore++;
    } else {
      console.log("Computer Won!!!");
      computerScore++;
    }
  } else if (lowerCaseHumanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("Human Won!!!");
      humanScore++;
    } else {
      console.log("Computer Won!!!");
      computerScore++;
    }
  } else {
    if (computerChoice === "paper") {
      console.log("Human Won!!!");
      humanScore++;
    } else {
      console.log("Computer WOn!!!");
      computerScore++;
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
