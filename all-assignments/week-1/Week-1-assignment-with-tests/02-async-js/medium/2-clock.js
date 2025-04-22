// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function Timer(){
    
    console.clear();
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    if(hour > 12){
        hour = hour - 12;
        console.log(`${hour}:${min}:${sec} PM`);
    } else {
        console.log(`${hour}:${min}:${sec} AM`);
    }
}
setInterval(Timer, 1000);