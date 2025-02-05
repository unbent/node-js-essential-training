const fs = require("fs");

// Changes the name / path of a folder
// fs.renameSync("./lib/config.js", "lib/project-config.js");
// console.log("Config.js file renamed");


// Changes the name / path of a folder
// Pass in function def when async.
// fs.rename("./lib/notes.md", "./notes.md", function(err) {
//     if(err) {
//         throw err;
//     }

//     console.log("Notes markdown file moved");
// })

// Removes file
// fs.unlinkSync("./lib/project-config.js");

// Removes file
// fs.unlink("notes.md", function(err) {
//     if (err) {
//         throw err;
//     }

//     console.log("Notes are gone!")
// })