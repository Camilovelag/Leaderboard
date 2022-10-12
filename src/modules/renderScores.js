export default function renderScores() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VjVNGQKZVCoeZvJq77or/scores/';
  fetch(`${url}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}