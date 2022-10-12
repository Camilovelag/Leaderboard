const addScore = async (score) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iwN8wBNmYfSm0NhEOvs2/scores/';
  await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(score),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addScore;