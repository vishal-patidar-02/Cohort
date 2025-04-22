/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The promise is resolved");
    }, n);
    if (!n) {
      reject(" The Promise is rejected");
    }
  });
  return myPromise;
}

wait()
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
