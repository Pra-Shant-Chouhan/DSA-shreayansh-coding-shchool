// Q48 Array left Rotation by 1 ?
// let arr = [10, 20, 30, 40, 50]
// let temp = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i]

// }
// arr[arr.length - 1] = temp
// console.log(arr);

// Pseudocode(Left Rotation)
// Start

// Store first element in temp

// Repeat from index 1 to last index
//     Copy current element to previous position

// Store temp at last index

// Print array

// End
// Q48 Array right Rotation by 1 ?
// let arr = [10, 20, 30, 40, 50]
// let lastElement = arr[arr.length - 1]

// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1]
// }
// arr[0] = lastElement

// console.log("right rotate arr=>", arr)

// Start

// Store last element in temp

// Repeat from last index down to index 1
//     Copy previous element to current position

// Store temp at index 0

// Print array

// End
// Q49 Array left rotation by K else
// START

// Input array
// Input k

// k = k mod length of array

// Repeat k times

//     Store first element in temp

//     Repeat from index 1 to last index
//         Copy current element to previous position

//     Store temp at last index

// Print array

// END
// let arr = [10, 20, 30, 40, 50]
// let k = 6
// k = k % arr.length
// for (j = 0; j < k; j++) {
//     let temp = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         arr[i - 1] = arr[i]
//     }
//     arr[arr.length - 1] = temp
// }
// console.log("rotate by k", arr);

