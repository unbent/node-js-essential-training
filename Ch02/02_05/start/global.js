process.stdout.write("Hello  \n \n")

const questionsAndAnswers = {
  'Do you wear wigs?': '',
  'Have you worn wigs?': '',
  'When will you wear wigs?': '',
}

// I wanted a more iterative approach to this problem,
// and a way to keep the questions and answers together in case
// we wanted to use an Enum later to search up a specific answer.

const askQuestion = (questions) => {
  if (questions.length === 0) {
    process.exit();
  }

  const [question] = questions[0];

  process.stdout.write(`\n\n\n ${question} \n >`);

  process.stdin.once("data", function (data) {
    questionsAndAnswers[question] = data.toString().trim();

    askQuestion(questions.slice(1));
  });
};

process.on("exit", function() {
  process.stdout.write("\n\n\nAll questions answered. Goodbye!\n\n");
  Object.entries(questionsAndAnswers).forEach(([question, answer]) => {
    process.stdout.write(`${question} ${answer}\n`);
  });
});

askQuestion(Object.entries(questionsAndAnswers));