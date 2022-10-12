const newGame = async () => {
  const gameName = {
    name: 'My awesome new game',
  };

  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify(gameName),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const fetched = await response.json();
  const gameId = fetched.result.split(' ')[3];
  localStorage.setItem('game-ID', gameId);
};

export default newGame;