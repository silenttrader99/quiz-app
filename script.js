const questions = [
  {
    question: "What is the capital of France?",
    answer: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
      { text: "Tokyo", correct: false },
    ],
  },
  {
    question: "What is the capital of Spain?",
    answer: [
      { text: "Madrid", correct: true },
      { text: "Dublin", correct: false },
      { text: "Sydney", correct: false },
      { text: "Kuala Lumpur", correct: false },
    ],
  },
  {
    question: "What is the capital of Italy?",
    answer: [
      { text: "Rome", correct: true },
      { text: "Seoul", correct: false },
      { text: "New Delhi", correct: false },
      { text: "Moscow", correct: false },
    ],
  },
  {
    question: "What is the capital of Portugal?",
    answer: [
      { text: "Lisbon", correct: true },
      { text: "Washington", correct: false },
      { text: "Jakarta", correct: false },
      { text: "Wellignton", correct: false },
    ],
  },
  {
    question: "What is the capital of Germany?",
    answer: [
      { text: "Berlin", correct: true },
      { text: "Singapore", correct: false },
      { text: "Bangkok", correct: false },
      { text: "Nairobi", correct: false },
    ],
  },
  {
    question: "What is the capital of Austria?",
    answer: [
      { text: "Vienna", correct: true },
      { text: "Cairo", correct: false },
      { text: "Manilla", correct: false },
      { text: "Ottawa", correct: false },
    ],
  },
  {
    question: "What is the capital of Switzerland?",
    answer: [
      { text: "Bern", correct: true },
      { text: "Oslo", correct: false },
      { text: "Helsinki", correct: false },
      { text: "Tashkent", correct: false },
    ],
  },
  {
    question: "What is the capital of Belgium?",
    answer: [
      { text: "Brussels", correct: true },
      { text: "Hanoi", correct: false },
      { text: "Warsaw", correct: false },
      { text: "Budapest", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.classList.add("hide");
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("wrong");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

startQuiz();
