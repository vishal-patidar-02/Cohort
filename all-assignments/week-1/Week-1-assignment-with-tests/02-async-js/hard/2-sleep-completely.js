/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (ms) {
    const start =  Date.now();
    while((Date.now()-start) < ms ){

    }
    console.log(`This is happend after ${Date.now()-start} Seconds`)
}

sleep(5000)