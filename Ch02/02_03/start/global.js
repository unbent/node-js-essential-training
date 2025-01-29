console.log(process.argv) // <-- You can see your passed in variables being stored in the array here

// argv function description:
// The process.argv property returns an array containing the command-line arguments 
// passed when the Node.js process was launched. The first element will be execPath. 
// See process.argv0 if access to the original value of argv[0] is needed. 
// The second element will be the path to the JavaScript file being executed. 
// The remaining elements will be any additional command-line arguments.
// --------------------------------------------------------------------------------
// 
// ~$ node global --user Dan --greeting "Hello from node"
// Doing this assigns variables with proccess, accessable via argv. 

function grab(flag) {
  return process.argv[process.argv.indexOf(flag) + 1];
  // Since argv is an array, we cannot look up the variable name directly.
  // Instead it stores the variable name, and then the value in the next array item.
  // This is why we need to do +1
}

console.log(grab("--greeting"))
console.log(grab("--user"))