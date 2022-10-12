const addScore = (score) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5BiPQuuuQC4a8rdncjYV/scores/';
  fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(score),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};

export default addScore;