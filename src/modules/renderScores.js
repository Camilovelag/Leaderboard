const renderScores = () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5BiPQuuuQC4a8rdncjYV/scores/';
  const scores = document.getElementById('scores');

  fetch(`${url}`)
    .then((response) => response.json())
    .then((users) => {
      const list = users.result.map((user) => `<li>${user.user} : ${user.score}</li></br>`).join('');
      scores.innerHTML = `${list}`;
    });
};

export default renderScores;