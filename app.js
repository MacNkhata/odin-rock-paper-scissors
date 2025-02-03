const getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3);

  return choices[choice];
};

let choice = getComputerChoice();

console.log(choice);
