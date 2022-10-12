const renderScores = async () => {
  const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const gameID = localStorage.getItem('game-ID') || 'BsB5KoZfAhoYwOzGkskM';
  const url = `${api}${gameID}/scores/`;
  const scores = document.getElementById('scores');

  const response = await fetch(`${url}`);
  const users = await response.json();
  const list = users.result.map((user) => `<li>${user.user} : ${user.score}</li></br>`).join('');
  scores.innerHTML = `${list}`;
};

export default renderScores;