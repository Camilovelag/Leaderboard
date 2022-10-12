const renderScores = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iwN8wBNmYfSm0NhEOvs2/scores/';
  const scores = document.getElementById('scores');

  const response = await fetch(`${url}`);
  const users = await response.json();
  const list = users.result.map((user) => `<li>${user.user} : ${user.score}</li></br>`).join('');
  scores.innerHTML = `${list}`;
};

export default renderScores;