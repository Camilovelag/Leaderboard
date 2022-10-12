export default function addScore(score) {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VjVNGQKZVCoeZvJq77or/scores/', {
    method: 'POST',
    body: JSON.stringify(score),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}