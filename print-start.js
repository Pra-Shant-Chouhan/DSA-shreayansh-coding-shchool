let prompt = require("prompt-sync")()

let n = Number(prompt("Enter a number = "))

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(` * `);
//     }
//     console.log()
// }
// print :
//  * 
//  *  * 
//  *  *  * 
// //  Q.2 print number 
// for (let i = 1; i <= n; i++) {
//     for (j = 1; j <= i; j++) {
//         process.stdout.write(`${j}`);
//     }
//     console.log()
// }

// print 
// Enter a number3
// 1
// 12
// 123

// opposite
// for (let i = 1; i <= n; i++) {
//     for (j = 1; j <= n - i + 1; j++) {
//         process.stdout.write("*");
//     }
//     console.log()
// }
// print
// ****
// ***
// **
// *

// Q.4 inverted write angle

// for (let i = 1; i <= n; i++) {
//     // inverted 
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(" ")
//         // process.stdout.write(" _ ")
//     }
//     // right angle triangle
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*")
//         // process.stdout.write(" * ")
//     }
//     console.log()
// }

// print
// Enter a number = 5
// _  _  _  _ *
// _  _  _ *  *
// _  _ *  *  *
// _ *  *  *  *
// *  *  *  *  * 
// Q.4 Triangle write angle

// for (let i = 1; i <= n; i++) {
//     // inverted 
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(" ")
//         // process.stdout.write("_")
//     }
//     // right angle triangle
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//         // process.stdout.write(" * ")
//     }
//     console.log()
// }

// print
// Enter a number = 5
//    *
//   * *
//  * * *
// * * * * 

// Q Print X 

// for (let i = 1; i <= n; i++) {
//     for (j = 1; j <= n; j++) {
//         if (i == j || (i + j == n + 1)) process.stdout.write("*")
//         else process.stdout.write(" ")
//     }
//     console.log()
// }
// Enter a number = 7
// *     *
//  *   *
//   * *
//    *
//   * *
//  *   *
// *     *

// Q Print V 
// for (let i = 1; i <= (n + 1) / 2; i++) {
//     let row = "";

//     for (let j = 1; j <= n; j++) {
//         if (i === j || i + j === n + 1) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }

//     console.log(row);
// }

for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (i === j || i + j === 2 * n) {
            row += "*";
        }
        else {
            row += " "
        }
    }
    console.log(row)
}

// Enter a number = 5
// *       *
//  *     * 
//   *   *  
//    * *   
//     *  
