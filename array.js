// let arr = [10, 20, 30, 40, 50]

// arr.push(110) // inserting from last
// console.log(arr);
// arr.pop()  // deleting form first
// console.log(arr);
// arr.unshift(1) //insertion at zero index 
// console.log(arr);
// arr.shift() //remove form first index
// console.log(arr);
// console.log(arr.length)
// for (let i = 0; i < arr.length; i++) {
//     console.log(`  ${i}`)
// }

// let arr1 = new Array(3).fill(0);
// console.log(arr1)

// arr1[0] = 10
// arr1[1] = 20
// arr1[2] = 30
// arr1[3] = 40
// console.log(arr1)
// console.log(arr1.length)

let arr2 = new Array(3);

// arr2.push(10)
// arr2.push(20)
// arr2.push(30)
// console.log(arr2)

// arr2.unshift(5)
// console.log(arr2)

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number = "));
// let arr = new Array(n)
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt(`Enter a number at index ${i} = `))
// }
// console.log(arr)

// Q 43 sum array array's elements 
let arr = [10, 20, 30, 40, 50]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(`Sum of array's elements = ${sum}`)
// Q44 Max Element in array

// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }

// console.log("Max number from array=", max)
// Q45 Second max element in array
// self OWN logic method 
// arr = [46, 57, 1, 2, 3]
// let max = arr[0];
// let secondMax = arr[1];
// if (max < secondMax) {
//     max = arr[1];
//     secondMax = arr[0]
// }else if(arr[i]>secondMax && arr[i] != max){
//     secondMax = arr[i]
// }
// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max;
//         max = arr[i]
//     }
// }
// console.log(`Second max is = ${secondMax} and Max = ${max} `)

//Right second method 
let max = Math.max(arr[0], arr[1]);
let secondMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i]
    } else if (arr[i] > secondMax && arr[i] != max) {
        secondMax = arr[i]
    }
}
console.log(`Second max is = ${secondMax} and Max = ${max} `)

// Q46 Reverse an array

// Q47 all zeros at left and all ones to right in an array 