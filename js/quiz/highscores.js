const highScoresList = document.getElementById("highScoresList");
const highScoresTeste = JSON.parse(localStorage.getItem("highScoresTeste")) || [];
console.log(highScores)

highScoresList.innerHTML = highScoresTeste
  .map(score => {
    return `<li class="high-score">${score.score} | ${score.name} - ${score.mail}</li>`;
  })
  .join("");

console.log(JSON.parse(localStorage.getItem("highScoresTeste")))