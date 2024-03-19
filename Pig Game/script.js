'use strict';

//Selecting Element

const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

//Starting Value
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let current = 0;
// Rolling Function
btnRollEl.addEventListener('click', function () {
  //1. Generate Random Number
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display the Number

  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  //3. check for roll dice 1
  if (dice != 1) {
    current += dice;
    current0El.textContent = current;
  } else {
    current = 0;
    current0El.textContent = current;
  }
});
btnHoldEl.addEventListener('click', function () {
  //move the current value to player score
  score0El.textContent = current;
  current = 0;
  current0El.textContent = current;
  //switch the player
});
