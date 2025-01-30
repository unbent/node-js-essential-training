const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Are you a jelly belly?\n", (answer) => {
    console.log(`Your answer: ${answer}`);
});