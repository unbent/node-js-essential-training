const fs = require("fs");

console.log('reading file...');

fs.readFile("./readme.md", "UTF-8", (err, ipsum) => {
  console.log(ipsum)
});
