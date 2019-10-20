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
    "question": "Qual a quantidade de pessoas surdas no mundo?",
    "choice1": "2.34  Milhões",
    "choice2": "360   Milhões",
    "choice3": "67.3  Milhões",
    "choice4": "1.02  Milhão",
    "choice5": "22.4  Milhões",
    "answer": 2
  },
  {
    "question": "Quando foi fundada a primeira escola para surdos no Brasi?",
    "choice1": "1907",
    "choice2": "1748",
    "choice3": "1857",
    "choice4": "1978",
    "choice5": "1604",
    "answer": 3
  },
  {
    "question": "O que significa INES",
    "choice1": "Instituição Nacional de Educação para Surdos",
    "choice2": "Instituto Nacional de Educação de Surdos",
    "choice3": "Instituição Nativ de Educação para Surdos",
    "choice4": "Instituição Nacional de Educação de Surdos",
    "choice5": "Instituto Nativ de Educação para Surdos",
    "answer": 2
  },
  {
    "question": "De onde veio a Libras (Língua Brasileira de Sinais) ?",
    "choice1": "Língua Portuguesa de Sinais",
    "choice2": "Língua Latina de Sinais",
    "choice3": "Língua Eslovaca de Sinais",
    "choice4": "Língua Inglesa de Sinais",
    "choice5": "Língua Francesa de Sinais",
    "answer": 5
  },
  {
    "question": "Onde fica localizado o INES?",
    "choice1": "R. das Laranjeiras",
    "choice2": "R. Bento Lisboa",
    "choice3": "R. Barata Ribeiro",
    "choice4": "R. Lins de Vasconcelos",
    "choice5": "R. Juruviara de Carvalho",
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
const TIME_QUESTIONS = 1000;

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
    }, TIME_QUESTIONS);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
