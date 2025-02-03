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
  let choice = prompt("Rock, paper, scissors?");
  if (choice !== null) {
    return choice;
  }
}
let choice = getHumanChoice();
console.log(choice);
