// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

let Data = "";

function cleaner(data){
    let words = data.trim().split(/\s+/);
    return words.join(" ");
}

fs.readFile("example.txt", "utf-8", (err, data) => {
    if(err){
        throw new Error();
    }
    Data = cleaner(data);

    fs.writeFile("example.txt",Data, "utf-8", (err) =>{
        if(err){
            throw new Error();
        }
        console.log("File is Cleaned, all the extra spaces are removed");
    })
});

