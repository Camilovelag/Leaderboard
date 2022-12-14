const renderScores = async () => {
  const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const gameId = localStorage.getItem('game-ID');
  const url = `${api}${gameId}/scores/`;
  const scores = document.getElementById('scores');

  const response = await fetch(`${url}`);
  const users = await response.json();
  const list = users.result.map((user) => `<li>${user.user}: ${user.score}</li>`).join('');
  scores.innerHTML = `${list}`;
};

export default renderScores;