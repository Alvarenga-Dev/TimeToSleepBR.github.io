const highScoresList = document.getElementById("highScoresList");
const highScoresTeste = JSON.parse(localStorage.getItem("highScoresTeste")) || [];
console.log(highScoresTeste)

highScoresList.innerHTML = highScoresTeste
  .map(score => {
    return `

    <li class="high-score"><span style="color: #54d0dd;"> ${score.score}</span> - ${score.name} </li>

    `;
  })
  .join("");

console.log(JSON.parse(localStorage.getItem("highScoresTeste")))

