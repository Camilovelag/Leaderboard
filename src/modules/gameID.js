const newGame = () => {
  const gameName = {
    name: 'My awesome new game',
  };

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify(gameName),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const gameID = json.result.split(' ')[3];
      // ID needed to link with API scoreboard DB
      // eslint-disable-next-line no-console
      console.log(gameID);
      return gameID;
    });
};

export default newGame;