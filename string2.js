let prompt = require("prompt-sync")()
let s = prompt("Enter a String = ");

// Q.58 Toggle each alphabet of string (upper to lower and lower to upper case)
// InPut AcgDfD output - aCGdFd
// let ans = "";

// for (let i = 0; i < s.length; i++) {
//     let ascii = s.charCodeAt(i);
//     if (ascii >= 65 && ascii <= 90) { // A
//         ans = ans + String.fromCharCode(ascii + 32)
//     } else {
//         ans = ans + String.fromCharCode(ascii - 32)
//     }
// }
// console.log(ans)

//  Q.59 Take an array of string words and String Prefix .print the number of strings in words that contain pref as prefix
// Example Input: words ["pay", "attention", "practice", "attend"]
// pref ="at" Output :
// let words = ["pay", "attention", "practice", "attend", "attendance"];

// let pref = "att"
// let count = 0;

// for (let i = 0; i < words.length; i++) {
//     if (words[i].startsWith(pref)) count++
// }
// console.log(count);

// Q.60 Capitalize first and  last character of each word in the sentence and print the new sentence
// ex Input -Hello bhai Kaise ho aap j
// ex Output -HellO Bhai KaisE HO AaP J

// Explanation
// s  = hello
// s.carAt(0)
// s.charAt(s.length-1)
// s.substring(1,s.length-1);

let arr = s.trim().split(" ");
let ans = ""
for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let first = word.charAt(0).toUpperCase();
    let mid = word.substring(1, word.length - 1);
    let last = word.charAt(word.length - 1).toUpperCase();
    ans += (first + mid + last) + " "
}
console.log(ans)

// Q.61 Accept a string and print the frequency of each character
