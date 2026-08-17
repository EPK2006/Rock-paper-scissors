function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
 }

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice) {
    return "It's a tie"
  }
}

function determineWinner(userChoice, computerChoice) {

     if (userChoice === computerChoice) {

      return "It's a tie!";
    }

 

      if (
          (userChoice === "rock" && computerChoice === "scissors") ||
          (userChoice === "paper" && computerChoice === "rock") ||
          (userChoice === "scissors" && computerChoice === "paper")
         ) {
       return "You win!";
       } else {
       return "Computer wins!";
      }
    }





// Function to play a round
 function playRound(userChoice) {

  const computerChoice = getComputerChoice();

  //userChoice = userChoice.toLowerCase();

  const result = determineWinner(userChoice, computerChoice);



   // Display what the user chose

   document.getElementById("userChoice").textContent = userChoice;



  // Display what the computer chose

  document.getElementById("computerChoice").textContent = computerChoice;



   // Display the winner

  document.getElementById("result").textContent = result;

 

  //console.log(`You chose ${userChoice}, computer chose ${computerChoice}.`);

  //console.log(result);

 }
