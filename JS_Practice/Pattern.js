//------1-------Square star pattern in js
// let n = 10
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         process.stdout.write("* ")
//     }
//     console.log("")
// }

//-----2------Hollow Square
// let n = 10
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i === 1 || i === n){          
//            process.stdout.write("* ")
//         } else {            
//            if(j === 1 || j === n){
//             process.stdout.write("* ")
//            } else {
//             process.stdout.write("  ")
//            }
//         }
//     }
//     console.log("")
// }

// ---------3---------Right triangle star pattern
// let n = 10
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("* ");
//     }
//     console.log()
// }

// ----------4---------left traingle star pattern 
// let n = 9
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=1;j++){
//         process.stdout.write("__".repeat((n-i)));
//         process.stdout.write("* ".repeat((n-(n-i))))
//     }
//     console.log()
// }

// ---------5---------Dowrward traingle pattern
// let n = 10
// for(let i=1;i<=n;i++){
//     for(let j=(n-i);j>1;j--){
//         process.stdout.write("* ")
//     }
//     console.log()
// }


// ----------6-------Hollow traingle patter 
// let n = 10
// for(let i=1;i<=n;i++){
//     for(let j=(n-i);j>=1;j--){
//         if(i === 1){
//            process.stdout.write("* ")
//         } else {
//             if( j === 1 || j === (n-i)){
//                 process.stdout.write("* "); 
//             } else {
//                 process.stdout.write("  ")
//             }
//         }
//     }
//     console.log()
// }

// -----------7---------- Pyramid star pattern 
// let numberOfRowInput = 8
// let n = (numberOfRowInput-1)*2; //number Of Star In Last Row

// let col = Math.floor((n/2)+1);
// let row = (Math.floor((n/2))*2)+1;

// for(let i=1; i<=col; i++ ){
    
//     for(let j=1;j<=row;j++){
//         if((j <= (col+(i-1)) && j >= (col-(i-1))) || j === col){
//             process.stdout.write("* "); 
//         } else {
//             process.stdout.write("  "); 
//         }
//     }
//     console.log()
// }
// let numberOfRowInput = 8
// let n = (numberOfRowInput-1)*2; //number Of Star In Last Row

// let col = Math.floor((n/2)+1);
// let row = (Math.floor((n/2))*2)+1;

// for(let i=1; i<=col; i++ ){
//     process.stdout.write("  ".repeat((Math.floor(n/2)-(i-1))));
//     process.stdout.write("* ".repeat((2*i)-1));  
//     process.stdout.write("  ".repeat((Math.floor(n/2)-(i-1))));
//     console.log()
// }

//--------8----------Inverted pyramid star pattern 
// let numberOfRowInput = 8
// let n = (numberOfRowInput-1)*2; //number Of Star In Last Row

// let col = Math.floor((n/2)+1);
// let row = (Math.floor((n/2))*2)+1;

// for(let i=col; i>=1; i--){
    
//     for(let j=1;j<=row;j++){
//         if((j <= (col+(i-1)) && j >= (col-(i-1))) || j === col){
//             process.stdout.write("* "); 
//         } else {
//             process.stdout.write("  "); 
//         }
//     }
//     console.log()
// }


//-----------9---------hollow pyramit pattern
// let numberOfRowInput = 8
// let n = (numberOfRowInput-1)*2; //number Of Star In Last Row

// let col = Math.floor((n/2)+1);
// let row = (Math.floor((n/2))*2)+1;

// for(let i=col; i>=1; i--){
    
//     for(let j=1;j<=row;j++){
//         if((j == (col+(i-1)) || j == (col-(i-1))) || i === col){
//             process.stdout.write("* "); 
//         } else {
//             process.stdout.write("  "); 
//         }
//     }
//     console.log()
// }

//------------10----------Diamond pattern in js
// let numberOfRowInput = 7 //number Of Star In Last Row
// let temp =  (((Math.floor(numberOfRowInput/2)*(2))+1));

// for(let i=1;i<=((Math.floor(numberOfRowInput/2)*(2))+1); i++){
//    if(i <= (((Math.floor(numberOfRowInput/2)*(2))+1)/2)){
//     process.stdout.write("  ".repeat(Math.floor(numberOfRowInput/2)-(i-1)));
//     process.stdout.write("* ".repeat((2*i)-1));
//     process.stdout.write("  ".repeat(Math.floor(numberOfRowInput/2)-(i-1)));
//    } else {
//     process.stdout.write("  ".repeat(Math.abs(Math.floor(numberOfRowInput/2)-(i-1))));
//     process.stdout.write("* ".repeat(temp));
//     process.stdout.write("  ".repeat(Math.abs(Math.floor(numberOfRowInput/2)-(i-1))));
//     temp -= 2;
//    } 
//    console.log();
// }

//--------------11-----------Hollow Diamond pattern 
// let numberOfRowInput = 8
// let n = (numberOfRowInput-1)*2; //number Of Star In Last Row

// let col = Math.floor((n/2)+1);
// let row = (Math.floor((n/2))*2)+1;

// for(let i=col; i>=1; i--){
    
//     for(let j=1;j<=row/2;j++){
//         if((j == (col+(i-1)) || j == (col-(i-1))) || i === col){
//             process.stdout.write("* "); 
//         } else {
//             process.stdout.write("  "); 
//         }
//     }
//     console.log()
// }

let str = "10 +   2 *    (   6 - (4 + 1) / 2) + 7";
let ans = Number(str);
console.log(ans);