const questions = [
  { question: "Wie sagt man 'apple' auf Deutsch?", answers: ["Banane", "Apfel", "Orange"], correct: 1 },
  { question: "Was ist die Hauptstadt von Deutschland?", answers: ["München", "Berlin", "Hamburg"], correct: 1 },
  { question: "Welcher Artikel gehört zu 'Haus'?", answers: ["Der", "Die", "Das"], correct: 2 }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  let questionEl = document.getElementById("question");
  let answersEl = document.getElementById("answers");
  let nextBtn = document.getElementById("next-btn");
  
  questionEl.textContent = questions[currentQuestionIndex].question;
  answersEl.innerHTML = "";

  questions[currentQuestionIndex].answers.forEach((answer, index) => {
      let btn = document.createElement("button");
      btn.textContent = answer;
      btn.classList.add("answer-btn");
      btn.onclick = () => checkAnswer(btn, index);
      answersEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function checkAnswer(button, index) {
  let correctIndex = questions[currentQuestionIndex].correct;
  let buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.disabled = true);
  
  if (index === correctIndex) {
      button.classList.add("correct");
      score++;
      document.getElementById("score").textContent = score;
  } else {
      button.classList.add("incorrect");
      buttons[correctIndex].classList.add("correct");
  }
  
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      document.getElementById("quiz-container").innerHTML = `<h1>Quiz beendet!</h1><p>Dein Score: ${score}</p>`;
  }
}

showQuestion();