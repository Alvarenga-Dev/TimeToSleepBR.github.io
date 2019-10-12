const totalScoreList = document.getElementById("totalScoreList");
const totalScoreTeste = JSON.parse(localStorage.getItem("totalScoreTeste")) || [];
console.log(totalScoreTeste)

totalScoreList.innerHTML = totalScoreTeste
  .map(score => {
    return `

    <li class="high-score"><span style="color: #54d0dd;"> ${score.score}</span> - ${score.name} | ${score.email} </li>

    `;
  })
  .join("");



