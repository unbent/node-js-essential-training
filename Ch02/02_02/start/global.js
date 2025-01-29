const path = require("path"); //Note: Have to do this because Node.js doesn't automatically share modules across files

console.log(__dirname);
console.log(`The filename is ${path.basename(__filename)}`);

for (let key in global) {
    console.log(key);
}

// These are the list of keys:
    // global
    // clearImmediate
    // setImmediate
    // clearInterval
    // clearTimeout
    // setInterval
    // setTimeout
    // queueMicrotask
    // structuredClone
    // atob
    // btoa
    // performance
    // fetch
    // crypto