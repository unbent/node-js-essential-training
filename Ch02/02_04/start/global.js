process.stdout.write("Hello  \n \n")

const questionsAndAnswers = {
  'Do you wear wigs?': '',
  'Have you worn wigs?': '',
  'When will you wear wigs?': '',
}

const ask = ([question, answer]) => {
  process.stdout.write(`\n\n\n ${question} \n >`);
}

process.stdin.on("data", function (data) {
  process.stdout.write(data.toString().trim());
});

Object.entries(questionsAndAnswers).forEach(ask);

