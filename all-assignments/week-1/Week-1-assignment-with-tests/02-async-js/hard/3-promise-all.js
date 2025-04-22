/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

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
    let start = new Date().getTime();

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((msg) => {
      console.log(msg);
      let end = new Date().getTime();
      console.log(`Time taken by this to resolve is ${(end-start)/1000} seconds`)
    })
    .catch((err) => {
      console.log(err);
    });

    
}

calculateTime();