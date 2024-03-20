'use strict';

//Selecting Element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

let activePlayer, current, playing, scores;

//Initial Setup
const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  current = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

//Starting Value
init();
//Switching Player
const switchPlayer = function () {
  current = 0;
  document.getElementById(`current--${activePlayer}`).textContent = current;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  activePlayer = activePlayer == 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};
// Rolling Function
btnRollEl.addEventListener('click', function () {
  if (playing) {
    //1. Generate Random Number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display the Number

    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    //3. check for roll dice 1
    if (dice != 1) {
      // Add dice to current score
      current += dice;
      document.getElementById(`current--${activePlayer}`).textContent = current;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});
btnHoldEl.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += current;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
btnNewEl.addEventListener('click', init);
