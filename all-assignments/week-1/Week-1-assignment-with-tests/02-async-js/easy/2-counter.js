// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter = 1;


function countFun(){
        console.log(counter);
        counter++;
        setTimeout(countFun, 1000);
}

setTimeout(countFun, 1000);




































































// (Hint: setTimeout)