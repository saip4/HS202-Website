const quizQuestions = [
  { question: "Do your parents often talk about their expectations for your career?", answer: "" },
  { question: "Do you feel anxious or stressed when thinking about your future career?", answer: "" },
  { question: "Do you feel that your own career interests are different from what your parents want for you?", answer: "" },
  { question: "Have you been encouraged to pursue a specific career (e.g., doctor, engineer) by your family?", answer: "" },
  { question: "Do you feel that your career choice will affect your relationship with your parents?", answer: "" },
  { question: "Do you feel free to explore career options that interest you, even if they’re different from your parents' suggestions?", answer: "" },
  { question: "When you discuss career options with your parents, do they listen to your preferences?", answer: "" },
  { question: "Do you worry that choosing a different career path might disappoint your family?", answer: "" }
];

let currentQuestionIndex = 0;

function startQuiz() {
  document.getElementById("quiz-container").innerHTML = `
      <p>${quizQuestions[currentQuestionIndex].question}</p>
      <button onclick="answerQuiz('yes')">Yes</button>
      <button onclick="answerQuiz('no')">No</button>
      <button onclick="answerQuiz('sometimes')">Sometimes</button>
  `;
}

function answerQuiz(answer) {
  quizQuestions[currentQuestionIndex].answer = answer;
  currentQuestionIndex++;
  
  if (currentQuestionIndex < quizQuestions.length) {
      startQuiz();
  } else {
      showQuizResults();
  }
}

function showQuizResults() {
  const yesAnswers = quizQuestions.filter(q => q.answer === "yes").length;
  
  let resultText;
  if (yesAnswers >= 5) {
      resultText = "It appears that your career choices might be strongly influenced by parental expectations. Consider having an open discussion with your parents to find a balance between their hopes and your personal interests.";
  } else if (yesAnswers >= 3) {
      resultText = "There seems to be moderate influence from your family on your career choices. It might help to reflect on how much their expectations align with your own passions.";
  } else {
      resultText = "It seems like you have a fair amount of freedom to choose your career path. Continue exploring your interests and make decisions that feel right for you.";
  }
  
  document.getElementById("quiz-container").innerHTML = `<p>${resultText}</p>`;
}

