export default function newGame() {
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
      console.log(gameID);
      return gameID;
    });
}