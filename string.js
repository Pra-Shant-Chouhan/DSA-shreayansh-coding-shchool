// let s = "Prashant"
// for (let i = 0; i < s.length; i++) {
//     // console.log(s.charCodeAt(i))
//     console.log(s.charAt(i))
//     console.log(s[i])
// }
// let rev = ""
// for (let i = s.length - 1; i >= 0; i--) {
//     // console.log(s.charCodeAt(i))
//     // console.log(s.charAt(i))
//     rev += s[i]
// }
// console.log("opposite = ", rev)

// Q.57 Palindromic String using two pointer algorithm (using two pointer)

let prompt = require("prompt-sync")()
let s = prompt("Enter a String = ");

let i = 0, j = s.length - 1;
let isPalindrome = true;
while (i < j) {
    if (s.charAt(i) != s.charAt(j)) {
        isPalindrome = false;
        break
    }
    i++;
    j--
}
console.log(isPalindrome ? "palindrome" : "not palindrome")

