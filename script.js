'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentscore0El = document.getElementById('current--0');
const currentscore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

const init = function(){
// Initial Values
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

// Starting Conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentscore0El.textContent = 0;
  currentscore1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

init();

btnRoll.addEventListener('click', function () {
  if(playing){

  
  // Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check for rolled 1
  if (dice !== 1) {
    // Add dice to currecnt score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to Next Player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    } }
});

btnHold.addEventListener('click', function () {

 
  // Add current score to active player score
  const score_calc = parseInt(document.getElementById(`score--${activePlayer}`).textContent);
  const new_score = score_calc + currentScore
  
  if (new_score <= 10) {
         
        document.getElementById(`score--${activePlayer}`).textContent = new_score;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
      
  
  } else {
        document.getElementById(`score--${activePlayer}`).textContent = 'You WON';
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false;
        diceEl.classList.add('hidden');
;
        


  } 
});

btnNew.addEventListener('click', function(){
  // btnNew.addEventListener('click', init(){} : This Method could be written in this way


  init();


  

})
