const username = document.getElementById("username");
const email = document.getElementById("email");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScoresTeste = JSON.parse(localStorage.getItem("highScoresTeste")) || [];
const totalScoreTeste = JSON.parse(localStorage.getItem("totalScoreTeste")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
    mail: email.value
  };


  highScoresTeste.push(score);
  highScoresTeste.sort((a, b) => b.score - a.score);
  highScoresTeste.splice(MAX_HIGH_SCORES);
  localStorage.setItem("highScoresTeste", JSON.stringify(highScoresTeste));



  console.log(score)
  window.location.assign("/quiz.html");
};

saveTotalScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
    mail: email.value
  };

  totalScoreTeste.push(score);
  totalScoreTeste.sort((a, b) => b.score - a.score);
  totalScoreTeste.splice(1000);
  localStorage.setItem("totalScoreTeste", JSON.stringify(totalScoreTeste));

  console.log(score)
  window.location.assign("/quiz.html");
};





