'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎆 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
    }
    // WHEN GUESS IS GOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game😭';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').style.color = '#7a0012';
    }

    //WHEN GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game😭';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').style.color = '#7a0012';
    }
  }
});

// AGAIN (TO RESET THE GAME)

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('.message').style.color = '#eee';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
