class Scoreboard {
  constructor(scoreCounter, livesCounter) {
    this.scoreCounter = scoreCounter;
    this.livesCounter = livesCounter;
  }

  updateScore(score) {
    this.scoreCounter.textContent = `${score * 100}`;
  }

  init(score, lives) {
    this.scoreCounter.textContent = `${score * 100}`;

    const livesEls = [];

    for (let i = 0; i < lives; i++) {
      const lifeElement = document.createElement("img");
      lifeElement.src = "./images/heart.png";
      lifeElement.style.width = "20px";
      lifeElement.style.height = "20px";
      livesEls.push(lifeElement);
    }

    this.livesCounter.append(...livesEls);
  }

  decrementLives() {
    this.livesCounter.removeChild(this.livesCounter.lastChild);
  }
}
