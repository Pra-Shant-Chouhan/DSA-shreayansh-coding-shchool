// ** Bubble Sort **
// let arr = [9, 8, 1, 4, 10, 23];

// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr)
// // oninput -> [1, 4, 8, 9, 10, 23]

//***selection sort*** 
// let arr = [5, 1, 8, 10, 7, 12];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//     let min = i
//     for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[min]) {
//             min = j;
//         }
//     }
//     if (min != i) {
//         let temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp
//     }
// }
// console.log(arr);
// // output => [1, 5, 7, 8, 10, 12]

// insertion sort 
let arr = [1, 5, 7, 10, 8, 12];
let n = arr.length;

for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key
}
console.log(arr);

