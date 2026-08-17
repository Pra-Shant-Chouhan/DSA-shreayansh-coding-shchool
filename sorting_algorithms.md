# Sorting Algorithms — JavaScript DSA Notes

Sorting means arranging elements in a particular order.

Example:

```text
Before: [9, 8, 1, 4, 10, 23]

After:  [1, 4, 8, 9, 10, 23]
```

This note covers:

1. Bubble Sort
2. Selection Sort
3. Insertion Sort
4. Comparison
5. Quick memory tricks

---

# 1. Bubble Sort

## Main Idea

**Compare two adjacent elements and swap them if they are in the wrong order.**

After every pass, the largest unsorted element moves to the end.

Think:

```text
Compare → Swap → Compare → Swap
```

## Example

```js
let arr = [9, 8, 1, 4, 10, 23];
```

### Pass 1

Compare adjacent elements:

```text
9 > 8
↓
Swap

[8, 9, 1, 4, 10, 23]
```

```text
9 > 1
↓
Swap

[8, 1, 9, 4, 10, 23]
```

```text
9 > 4
↓
Swap

[8, 1, 4, 9, 10, 23]
```

`9 < 10`, so no swap.

`10 < 23`, so no swap.

After Pass 1:

```text
[8, 1, 4, 9, 10, 23]
                         ↑
                     largest fixed
```

`23` is now in its correct position.

### Pass 2

We don't need to check `23` again.

```text
[8, 1, 4, 9, 10 | 23]
```

```text
8 > 1
↓
[1, 8, 4, 9, 10 | 23]
```

```text
8 > 4
↓
[1, 4, 8, 9, 10 | 23]
```

Now the array is:

```text
[1, 4, 8, 9, 10, 23]
```

## Visual Concept

```text
Pass 1 → Largest goes to the right
Pass 2 → Second largest goes to the right
Pass 3 → Third largest goes to the right

[9, 8, 1, 4, 10, 23]
                     ↓
[8, 1, 4, 9, 10, 23]
                     ↑
                   fixed
```

## Code

```js
let arr = [9, 8, 1, 4, 10, 23];

let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);
```

Output:

```text
[1, 4, 8, 9, 10, 23]
```

## Why `n - 1 - i`?

After every pass, one largest element is already fixed at the end.

```text
Pass 1 → last 1 element fixed
Pass 2 → last 2 elements fixed
Pass 3 → last 3 elements fixed
```

Therefore, we don't need to compare those elements again.

## Complexity

| Case    |  Time |
| ------- | ----: |
| Best*   |  O(n) |
| Average | O(n²) |
| Worst   | O(n²) |
| Space   |  O(1) |

> The code above is O(n²) even when the array is already sorted. To get O(n) best case, use a `swapped` flag.

## Remember

> **Bubble Sort = Compare neighbors + Swap + Largest bubbles to the end**

---

# 2. Selection Sort

## Main Idea

**Find the smallest element and put it at the correct position.**

Instead of repeatedly swapping neighboring elements, Selection Sort selects the minimum element from the unsorted portion.

Think:

```text
Find Minimum → Swap
```

## Example

```js
let arr = [5, 1, 8, 10, 7, 12];
```

### Pass 1

Start at index `0`.

```text
[5, 1, 8, 10, 7, 12]
 ↑
position to fill
```

Find the smallest element:

```text
5
1 ← smallest
8
10
7
12
```

Swap `5` and `1`:

```text
[1, 5, 8, 10, 7, 12]
 ↑
fixed
```

### Pass 2

Start from index `1`.

```text
[1 | 5, 8, 10, 7, 12]
     ↑
```

Find minimum:

```text
5 ← smallest
8
10
7
12
```

`5` is already in the correct position.

```text
[1, 5 | 8, 10, 7, 12]
```

### Pass 3

```text
[1, 5 | 8, 10, 7, 12]
         ↑
```

Smallest remaining element is `7`.

Swap:

```text
[1, 5, 7, 10, 8, 12]
       ↑
     fixed
```

### Pass 4

Remaining:

```text
[1, 5, 7 | 10, 8, 12]
```

Smallest = `8`.

Swap:

```text
[1, 5, 7, 8, 10, 12]
```

Final:

```text
[1, 5, 7, 8, 10, 12]
```

## Visual Concept

Selection Sort creates a sorted section on the left:

```text
[sorted | unsorted]

[1 | 5, 8, 10, 7, 12]

[1, 5 | 8, 10, 7, 12]

[1, 5, 7 | 10, 8, 12]

[1, 5, 7, 8 | 10, 12]

[1, 5, 7, 8, 10 | 12]
```

## Code

```js
let arr = [5, 1, 8, 10, 7, 12];

let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }

    if (min !== i) {
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

console.log(arr);
```

Output:

```text
[1, 5, 7, 8, 10, 12]
```

## Important Variable: `min`

```js
let min = i;
```

`min` stores the **index of the smallest element found so far**.

For example:

```text
[5, 1, 8, 10, 7, 12]
 ↑  ↑
 i  min
```

When we find a smaller element:

```js
if (arr[j] < arr[min]) {
    min = j;
}
```

Finally, swap the minimum element with the current position.

## Complexity

| Case    |  Time |
| ------- | ----: |
| Best    | O(n²) |
| Average | O(n²) |
| Worst   | O(n²) |
| Space   |  O(1) |

## Remember

> **Selection Sort = Find Minimum + Put it at the beginning of the unsorted portion**

---

# 3. Insertion Sort

## Main Idea

**Take one element at a time and insert it into its correct position in the already-sorted portion.**

Think about arranging playing cards in your hand.

```text
Take card → Find position → Shift cards → Insert card
```

## Example

```js
let arr = [1, 5, 7, 10, 8, 12];
```

Initially:

```text
[1 | 5, 7, 10, 8, 12]
```

`1` is considered sorted.

---

## Take `5`

```text
[1 | 5, 7, 10, 8, 12]
     ↑
    key
```

Compare `5` with `1`.

```text
1 < 5
```

So `5` stays.

```text
[1, 5 | 7, 10, 8, 12]
```

---

## Take `7`

```text
[1, 5 | 7, 10, 8, 12]
          ↑
```

`7 > 5`, so it is already in the correct position.

```text
[1, 5, 7 | 10, 8, 12]
```

---

## Take `10`

```text
[1, 5, 7 | 10, 8, 12]
             ↑
```

`10 > 7`, so no shifting is required.

```text
[1, 5, 7, 10 | 8, 12]
```

---

## Take `8`

This is where Insertion Sort becomes easier to understand.

```text
[1, 5, 7, 10 | 8, 12]
                ↑
               key
```

Compare `8` with `10`:

```text
10 > 8
```

Move `10` one position to the right:

```text
[1, 5, 7, 10, 10, 12]
          ↑
```

Now compare `8` with `7`:

```text
7 < 8
```

Stop and insert `8`:

```text
[1, 5, 7, 8, 10, 12]
```

## Important Concept

Insertion Sort **shifts** elements instead of repeatedly swapping them.

```text
Before:

[1, 5, 7, 10 | 8]

             ↓

[1, 5, 7, 10, 10]

             ↓

[1, 5, 7, 8, 10]
```

## Code

```js
let arr = [1, 5, 7, 10, 8, 12];

let n = arr.length;

for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = key;
}

console.log(arr);
```

Output:

```text
[1, 5, 7, 8, 10, 12]
```

## Understanding `key`

```js
let key = arr[i];
```

`key` is the element we are currently trying to insert.

For example:

```text
[1, 5, 7, 10, 8, 12]
             ↑
            key
```

So:

```text
key = 8
```

Then:

```js
while (j >= 0 && arr[j] > key)
```

means:

> While the previous element is bigger than `key`, move it one position to the right.

Finally:

```js
arr[j + 1] = key;
```

puts the key into its correct position.

## Complexity

| Case    |  Time |
| ------- | ----: |
| Best    |  O(n) |
| Average | O(n²) |
| Worst   | O(n²) |
| Space   |  O(1) |

### Why is the best case O(n)?

Consider an already sorted array:

```text
[1, 2, 3, 4, 5, 6]
```

Each element only needs one comparison.

No shifting is required.

## Remember

> **Insertion Sort = Take element + Shift larger elements + Insert**

---

# 4. Comparison of Sorting Algorithms

| Algorithm      | Main Action         |  Best | Average | Worst | Space |
| -------------- | ------------------- | ----: | ------: | ----: | ----: |
| Bubble Sort    | Compare + Swap      | O(n)* |   O(n²) | O(n²) |  O(1) |
| Selection Sort | Find Minimum + Swap | O(n²) |   O(n²) | O(n²) |  O(1) |
| Insertion Sort | Shift + Insert      |  O(n) |   O(n²) | O(n²) |  O(1) |

`*` Bubble Sort requires the `swapped` optimization for O(n) best-case performance.

---

# 5. How to Remember All Three

## Bubble Sort

```text
Compare neighbors
       ↓
    Swap them
       ↓
Largest moves to END
```

**Keyword:** `BUBBLE`

---

## Selection Sort

```text
Search entire unsorted part
       ↓
Find minimum
       ↓
Put minimum at beginning
```

**Keyword:** `SELECT**

---

## Insertion Sort

```text
Take one element
       ↓
Shift larger elements
       ↓
Insert element
```

**Keyword:** `INSERT`

---

# 6. One-Line Interview Answers

### Bubble Sort

> Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. The largest unsorted element reaches the end after each pass.

### Selection Sort

> Selection Sort finds the minimum element from the unsorted portion and swaps it with the first element of that portion.

### Insertion Sort

> Insertion Sort takes each element and inserts it into the correct position in the sorted portion by shifting larger elements to the right.

---

# 7. Quick Revision

```text
Bubble
↓
Compare adjacent
↓
Swap
↓
Largest → End


Selection
↓
Find minimum
↓
Swap
↓
Minimum → Beginning


Insertion
↓
Take key
↓
Shift larger elements
↓
Insert key
```

## Easy Memory Trick

```text
B → Bubble → Biggest goes to Back

S → Selection → Select Smallest

I → Insertion → Insert in correct position
```

---

# 8. Important DSA Points

All three algorithms are:

* In-place
* Use O(1) extra space
* Easy to implement
* Usually O(n²)
* Useful for learning sorting fundamentals

Among these three:

```text
Nearly Sorted Array
        ↓
Insertion Sort is usually a good choice
```

Selection Sort performs a predictable O(n²) number of comparisons.

Bubble Sort is mainly useful for understanding the basic idea of repeated adjacent comparisons and swaps.
