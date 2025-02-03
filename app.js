// const getComputerChoice = () => {
//   let choices = ["rock", "paper", "scissors"];
//   const choice = Math.floor(Math.random() * 3);

//   return choices[choice];
// };

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let choice = getComputerChoice();

console.log(choice);
