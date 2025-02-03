// const getComputerChoice = () => {
//   let choices = ["rock", "paper", "scissors"];
//   const choice = Math.floor(Math.random() * 3);

//   return choices[choice];
// };

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
  let choice = prompt("Rock, Paper, Scissors?").toLowerCase();
  if (choice !== null) {
    return choice;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      return "human";
    } else {
      return "computer";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      return "human";
    } else {
      return "computer";
    }
  } else {
    if (computerChoice === "paper") {
      return "human";
    } else {
      return "computer";
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  rounds = 5;

  for (i = 1; i <= rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);

    if (winner === "human") {
      console.log("Human won!");
      humanScore++;
    } else if (winner === "computer") {
      console.log("Computer won!");
      computerScore++;
    } else {
      console.log("Itsa Tie!!");
    }
  }

  if (humanScore > computerScore) {
    console.log("*********************************");
    console.log(`Human won with - ${humanScore} wins`);
  } else if (computerScore > humanScore) {
    console.log("*********************************");
    console.log(`Computer won with - ${computerScore} wins`);
  } else {
    console.log("*********************************");
    console.log(`Its a tie of  ${computerScore} wins - ${humanScore} wins`);
  }
}

playGame();
