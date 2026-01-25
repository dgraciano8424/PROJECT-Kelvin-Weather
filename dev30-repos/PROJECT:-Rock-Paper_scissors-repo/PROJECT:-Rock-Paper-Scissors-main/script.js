const userChoice = 2;
const computerChoice = 2;
const Rock = 0;
const Paper = 1;
const scissors = 2;

function rockPaperScissors(userChoice, computerChoice) {
  if ((userChoice - computerChoice + 3) % 3 === 0) {
    console.log("Tie!");
  } else if ((userChoice - computerChoice + 3) % 3 === 1) {
    console.log("User Wins!");
  } else {
    console.log("Computer Wins!");
  }
}
console.log(rockPaperScissors(2, 1));
// 0=tie
// 1 = userwin
// 2=compwin
