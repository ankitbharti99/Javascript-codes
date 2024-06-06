'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 113;
// console.log(document.querySelector('.guess').value);

let highscore = 0;
let score = 20;
let secretnumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is too high
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ⚠️';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ⚠️';
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.number').textContent = secretnumber;
    document.querySelector('.number').textContent = '?';
  });
});
