const fs = require('fs');

fs.readFile("text.txt", "utf-8", function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
    }else{
  console.log(data);
        }
}
);










// A function that takes a callback
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

// Callback function definition
function sayGoodbye() {
    console.log("Goodbye!");
}

// Calling greet with sayGoodbye as a callback
greet("Alice", sayGoodbye);










function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      resolve("hi there!")
    });
    return p;
  }
  
  async function main() {
    const value = await kiratsAsyncFunction();
    console.log(value);
  }
  
  main();