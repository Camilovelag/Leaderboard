import _ from 'lodash'; // eslint-disable-line
import './style.css';
import Score from './modules/score.js';
import newGame from './modules/gameId.js'; // eslint-disable-line
import addScore from './modules/addScore.js';
import renderScores from './modules/renderScores.js';

const form = document.querySelector('form');
const refresh = document.getElementById('refresh');
const footer = document.querySelector('footer');
const createGame = document.getElementById('newGame');

// set game ID
const gameId = 'BsB5KoZfAhoYwOzGkskM';
localStorage.setItem('game-ID', gameId);

// refresh scoreboard
refresh.addEventListener('click', (e) => {
  e.preventDefault();
  renderScores();
  window.location.reload();
});

// add new score
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const newScore = new Score(name, score);
  addScore(newScore);
  form.reset();
});

// create new game
footer.style.display = 'none';
createGame.addEventListener('click', (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-alert, no-restricted-globals
  if (confirm('Sure you want to create a new game?')) {
    newGame();
  }
});

renderScores();