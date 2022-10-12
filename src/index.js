import _ from 'lodash'; // eslint-disable-line
import './style.css';
import Score from './modules/score.js';
import refreshpage from './modules/refresh.js';
import newGame from './modules/gameID.js';
import addScore from './modules/addScore.js';
import renderScores from './modules/renderScores.js';

const form = document.querySelector('form');
const refresh = document.getElementById('refresh');

// refresh scoreboard

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  refreshpage();
});

// add new score

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const newScore = new Score(name, score);
  addScore(newScore);
  renderScores();
  form.reset();
});

// create new game
const createGame = document.getElementById('newGame');
createGame.addEventListener('click', (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-alert, no-restricted-globals
  if (confirm('Sure you want to create a new game?')) {
    newGame();
  }
});

renderScores();