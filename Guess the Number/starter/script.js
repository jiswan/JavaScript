'use strict';
let highScore = 0;
let score;
const againFunc = () => {
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
};
document.querySelector('.again').addEventListener('click', againFunc);
const display = message =>
  (document.querySelector('.message').textContent = message);
let value = score => (document.querySelector('.score').textContent = score);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
score = 20;
console.log(score);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    display('No Number Entered');
  } else if (guess === secretNumber) {
    display('correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      value(score);
    } else {
      display('You Loose');
      value(0);
      document.querySelector('body').style.background = '#FF0000';
    }
  }
});
