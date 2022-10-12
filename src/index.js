import _ from 'lodash'; // eslint-disable-line
import './style.css';
import Score from './modules/score.js';
import refreshpage from './modules/refresh.js';
// import newGame from './modules/gameID.js';
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
  newScore.renderScore();

  form.reset();
});

renderScores();

// newGame();