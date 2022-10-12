export default function renderScores() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BvO8vFzK4jDXs4qpBNTL/scores/';
  // const gameID = 'RaTJCwwMRlIaoKro7oGg';
  const scores = document.getElementById('scores');

  fetch(`${url}`)
    .then((response) => response.json())
    .then((users) => {
      console.log(users.result);
      const list = users.result.map((user) => `<li>${user.user} : ${user.score}</li></br>`).join('');
      scores.innerHTML = `${list}`;
    });
}