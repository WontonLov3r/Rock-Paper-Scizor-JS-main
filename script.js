//opening message
let Enter = prompt("Are you ready to die: ")

//This sets the base score, the starting score for both the computer and the player as 0
let playerWins = 0;
let computerWins = 0;

//This function keeps the images for same on the site, but gets the userchoice if the user clicks a specific image
const getUserChoice = (userChoice) => {
  if (userChoice === "rock") {
    document.getElementById("scissors").src = "scissors.png";
    document.getElementById("paper").src = "paper.png";
    return userChoice;
  }

  if (userChoice === "scissors") {
    document.getElementById("rock").src = "rock.png";
    document.getElementById("paper").src = "paper.png";
    return userChoice;
  }

  if (userChoice === "paper") {
    document.getElementById("rock").src = "rock.png";
    document.getElementById("scissors").src = "scissors.png";
    return userChoice;
  } 
};

//This function randomizes the computer's choices and then saves the computer choice for when the function is called
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

//This function determines the winner, it takes the two parameters of userChoice and computerChoice, and compares the two determining the winner, and then if the computer wins, a point will be added to the computer's score, and vice versa
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    if (userChoice === 'rock' && userChoice === computerChoice) {
      document.getElementById("winnerTag").innerHTML = 'It is a Tie!';
      document.getElementById("compImg").src = "rock.png";
      return "This game is a tie!";
    }
    if (userChoice === 'paper' && userChoice === computerChoice) {
      document.getElementById("winnerTag").innerHTML = 'It is a Tie!';
      document.getElementById("compImg").src = "paper.png";
      return "This game is a tie!";
    }
    if (userChoice === 'scissors' && userChoice === computerChoice) {
      document.getElementById("winnerTag").innerHTML = 'It is a Tie!';
      document.getElementById("compImg").src = "scissors.png";
      return "This game is a tie!";
    }
  }

  if (userChoice === 'rock') {
    if (computerChoice === "paper") {
      document.getElementById("winner").src = "paper.png";
      document.getElementById("compImg").src = "paper.png";
      document.getElementById("winnerTag").innerHTML = 'Winner!';
      document.getElementById("computerWins").innerHTML = computerWins++;
    } else {
      document.getElementById("winner").src = "rock.png";
      document.getElementById("compImg").src = "scissors.png";
      document.getElementById("winnerTag").innerHTML = 'Winner!';
      document.getElementById("playerWins").innerHTML = playerWins++;
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === "scissors") {
      document.getElementById("winner").src = "scissors.png";
      document.getElementById("compImg").src = "scissors.png";
      document.getElementById("winnerTag").innerHTML = 'Winner!';
      document.getElementById("computerWins").innerHTML = computerWins++;
    } else {
      document.getElementById("winner").src = "paper.png";
      document.getElementById("compImg").src = "rock.png";
      document.getElementById("winnerTag").innerHTML = 'Winner!';
      document.getElementById("playerWins").innerHTML = playerWins++;
    }
  }


  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      document.getElementById("winner").src = "rock.png";
      document.getElementById("compImg").src = "rock.png";
      document.getElementById("winnerTag").innerHTML = 'Winner!';
      document.getElementById("computerWins").innerHTML = computerWins++;
    } else {
      document.getElementById("winner").src = "scissors.png";
      document.getElementById("compImg").src = "paper.png";
      document.getElementById("winnerTag").innerHTML = 'Winner!';
      document.getElementById("playerWins").innerHTML = playerWins++;
    }
  }
};

//This function plays the game and then displays the winner after running the computer choice function and the determine winner function
const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
};

//This function reset, takes the scores of both the computer and player and resets it, putting it back to 0
const reset = () => {
  let playerWins = 0;
  document.getElementById("playerWins").innerHTML = 0;
  let computerWins = 0;
  document.getElementById("computerWins").innerHTML = 0;
}

playGame();
