// Initialize or retrieve the score from localStorage
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// Display the score on page load
scoreBoard();

// Main function called when the player makes a move
function playerMover(playerPick) {
  const computerMove = pickComputerMove();
  let result = '';

  // Determine result
  if (playerPick === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You lose';
    } else {
      result = 'You Win';
    }
  } else if (playerPick === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else {
      result = 'You lose';
    }
  } else if (playerPick === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose';
    } else if (computerMove === 'Paper') {
      result = 'You Win';
    } else {
      result = 'Tie';
    }
  }

  // Update the score based on result
  if (result === 'You Win') {
    score.wins++;
  } else if (result === 'You lose') {
    score.losses++;
  } else {
    score.ties++;
  }

  // Save updated score
  localStorage.setItem('score', JSON.stringify(score));

  // Update the DOM
  scoreBoard();
  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-move').innerHTML =
    `You <img class="img-sty" src="images/${playerPick}-emoji.png" alt=""> 
     <img class="img-sty" src="images/${computerMove}-emoji.png" alt=""> Computer`;

  console.log(`You picked ${playerPick}, computer picked ${computerMove}. Result: ${result}. Score - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

// Update the scoreboard on the page
function scoreBoard() {
  document.querySelector('.js-score-bord').innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Randomly pick a move for the computer
function pickComputerMove() {
  const randomMove = Math.random();
  if (randomMove < 1 / 3) {
    return 'Rock';
  } else if (randomMove < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}
