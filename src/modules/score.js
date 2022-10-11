const scores = document.getElementById('scores');

export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  // render score
  renderScore() {
    const li = `<li>${this.name} : ${this.score} (new)</li>`;
    scores.insertAdjacentHTML('beforeend', li);
  }
}