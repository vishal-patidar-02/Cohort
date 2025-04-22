/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


let start = new Date().getTime();

function waitOneSecond() {
  return new Promise((res) => {
    setTimeout(() => {
      res("One Second promise is resolved");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Two Second promise is resolved");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Three Second promise is resolved");
    }, 3000);
  });
}

function calculateTime() {
  waitOneSecond()
    .then((msg1) => {
      console.log(msg1);
      return waitTwoSecond();
    })
    .then((msg2) => {
      console.log(msg2);
      return waitThreeSecond();
    })
    .then((msg3) => {
      console.log(msg3);
      let end = new Date().getTime();
      console.log(
        `Time taken by this to resolve is ${(end - start) / 1000} seconds`
      );
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}

calculateTime();

