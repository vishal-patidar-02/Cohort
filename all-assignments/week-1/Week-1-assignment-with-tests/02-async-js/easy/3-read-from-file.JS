// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");
let startTime = new Date().getTime();
fs.readFile("file.txt", 'utf8', (err, data) => {
  if (err) {
    throw new Error(err);
  }
  console.log(data);
  let endTIme1 = new Date().getTime();
  console.log(`Time taken by file read ${(endTIme1 - startTime) / 1000} Sec`);
});

function operation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  let endTIme2 = new Date().getTime();
  console.log(
    `sum of ${n} is ${sum} and it take time ${
      (endTIme2 - startTime) / 1000
    } Sec`
  );
}

operation(10000000000);
