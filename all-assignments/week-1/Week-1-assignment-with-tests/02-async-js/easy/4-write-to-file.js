// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

let data = "This is the new updated file where i change the data of file.txt";
fs.writeFile("file.txt", data, "utf8", (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("data the written");
  console.log(data);
});
