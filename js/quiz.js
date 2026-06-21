function scoreQuiz(correctAnswers, resultId) {
  const total = Object.keys(correctAnswers).length;
  let score = 0;

  for (const key in correctAnswers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (!selected) {
      alert("Please answer all " + total + " questions before submitting.");
      return;
    }
    if (selected.value === correctAnswers[key]) {
      score++;
    }
  }

  document.getElementById(resultId || "quizResult").innerHTML =
    "Your Score: " + score + " out of " + total;
}
