const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "How are you doing?\n",
  "Got any plans this weekend?\n",
  "Why won't you go on a date with me?\n",
]

function collectAnswers(questions, done) {
  const answers = [];

  const questionAnswered = (answer) => {
    answers.push(answer.trim());

    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered)
    } else {
      return done(answers);
    }
  }

  rl.question(questions[0], questionAnswered);
}

collectAnswers(questions, (answers) => {
  console.log('Thank you for your answers!');
  console.log(answers);
  process.exit();
});


