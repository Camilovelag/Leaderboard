const addScore = async (score) => {
  const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const gameId = localStorage.getItem('game-ID');
  const url = `${api}${gameId}/scores/`;
  await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(score),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addScore;