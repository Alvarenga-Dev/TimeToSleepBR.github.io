const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices)
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
 
  {
    "question": "Teste, Todas as respostas são 1 :D",
    "choice1": "1",
    "choice2": "2",
    "choice3": "3",
    "choice4": "4",
    "choice5": "5",
    "answer": 1
  },
  {
    "question": "Teste, Todas as respostas são 1 :D",
    "choice1": "1",
    "choice2": "2",
    "choice3": "3",
    "choice4": "4",
    "choice5": "5",
    "answer": 1
  },
  {
    "question": "Teste, Todas as respostas são 1 :D",
    "choice1": "1",
    "choice2": "2",
    "choice3": "3",
    "choice4": "4",
    "choice5": "5",
    "answer": 1
  },
  {
    "question": "Teste, Todas as respostas são 1 :D",
    "choice1": "1",
    "choice2": "2",
    "choice3": "3",
    "choice4": "4",
    "choice5": "5",
    "answer": 1
  },
  {
    "question": "Teste, Todas as respostas são 1 :D",
    "choice1": "1",
    "choice2": "2",
    "choice3": "3",
    "choice4": "4",
    "choice5": "5",
    "answer": 1
  },
  {
    "question": "Teste, Todas as respostas são 1 :D",
    "choice1": "1",
    "choice2": "2",
    "choice3": "3",
    "choice4": "4",
    "choice5": "5",
    "answer": 1
  },
  {
    "question": "Teste, Todas as respostas são 1 :D",
    "choice1": "1",
    "choice2": "2",
    "choice3": "3",
    "choice4": "4",
    "choice5": "5",
    "answer": 1
  },
  {
    "question": "Teste, Todas as respostas são 1 :D",
    "choice1": "1",
    "choice2": "2",
    "choice3": "3",
    "choice4": "4",
    "choice5": "5",
    "answer": 1
  },
  {
    "question": "Teste, Todas as respostas são 1 :D",
    "choice1": "1",
    "choice2": "2",
    "choice3": "3",
    "choice4": "4",
    "choice5": "5",
    "answer": 1
  },
  {
    "question": "Teste, Todas as respostas são 1 :D",
    "choice1": "1",
    "choice2": "2",
    "choice3": "3",
    "choice4": "4",
    "choice5": "5",
    "answer": 1
  }
];

//CONSTANTS
const CORRECT_BONUS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  game.classList.remove("hidden");
  loader.classList.add("hidden");
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Pergunta ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerHTML = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1200);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
