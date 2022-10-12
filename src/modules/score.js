const scores = document.getElementById('scores');

export default class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  // render score
  renderScore() {
    const li = `<li>${this.user} : ${this.score} (new)</li>`;
    scores.insertAdjacentHTML('beforeend', li);
  }
}