# JavaScript DSA — Array Part 2

## Q48. Array Left Rotation by 1

### Problem

Rotate an array to the left by one position.

Example:

```js
let arr = [10, 20, 30, 40, 50];
```

Expected result:

```text
[20, 30, 40, 50, 10]
```

### Logic

1. Store the first element in a temporary variable.
2. Shift every element one position to the left.
3. Put the saved first element at the last position.

### Code

```js
let arr = [10, 20, 30, 40, 50];

let firstElement = arr[0];

for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
}

arr[arr.length - 1] = firstElement;

console.log(arr);
```

### Dry Run

Initial:

```text
[10, 20, 30, 40, 50]
```

Save:

```text
firstElement = 10
```

Shift left:

```text
20 20 30 40 50
20 30 30 40 50
20 30 40 40 50
20 30 40 50 50
```

Put `10` at the end:

```text
[20, 30, 40, 50, 10]
```

### Pseudocode

```text
START

Input array

Store first element in temp

FOR i = 1 to last index
    Copy array[i] to array[i - 1]
END FOR

Put temp at the last index

Print array

END
```

### Complexity

```text
Time  : O(n)
Space : O(1)
```

---

# Q48. Array Right Rotation by 1

### Problem

Rotate an array to the right by one position.

Example:

```js
let arr = [10, 20, 30, 40, 50];
```

Expected result:

```text
[50, 10, 20, 30, 40]
```

### Logic

1. Store the last element.
2. Shift every element one position to the right.
3. Put the saved last element at index `0`.

### Correct Code

```js
let arr = [10, 20, 30, 40, 50];

let lastElement = arr[arr.length - 1];

for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = lastElement;

console.log(arr);
```

### Dry Run

Initial:

```text
[10, 20, 30, 40, 50]
```

Save:

```text
lastElement = 50
```

Shift right:

```text
10 20 30 40 40
10 20 30 30 40
10 20 20 30 40
10 10 20 30 40
```

Put `50` at index `0`:

```text
[50, 10, 20, 30, 40]
```

### Pseudocode

```text
START

Input array

Store last element in temp

FOR i = last index down to 1
    Copy array[i - 1] to array[i]
END FOR

Put temp at index 0

Print array

END
```

### Complexity

```text
Time  : O(n)
Space : O(1)
```

---

## Common Mistakes in Right Rotation

### Mistake 1 — confusing value with index

Incorrect:

```js
let zeroIndex = arr[0];
```

This stores the value `10`, not index `0`.

So:

```js
arr[zeroIndex]
```

means:

```js
arr[10]
```

Correct:

```js
let zeroIndex = 0;
```

Usually, there is no need to create such variables.

### Mistake 2 — moving in the wrong direction

For right rotation:

```js
arr[i] = arr[i - 1];
```

The loop must move from right to left:

```js
for (let i = arr.length - 1; i > 0; i--)
```

If you move from left to right, you overwrite values before they can be copied.

### Mistake 3 — always writing to the last position

Incorrect:

```js
arr[arr.length - 1] = arr[i];
```

Correct:

```js
arr[i] = arr[i - 1];
```

---

# Q49. Array Left Rotation by K

### Problem

Rotate an array to the left by `k` positions.

Example:

```js
let arr = [10, 20, 30, 40, 50];
let k = 2;
```

Expected:

```text
[30, 40, 50, 10, 20]
```

## Method 1 — Repeated One-Position Rotation

This method applies the left rotation by one position `k` times.

### Correct Code

```js
let arr = [10, 20, 30, 40, 50];
let k = 2;

k = k % arr.length;

for (let j = 0; j < k; j++) {

    let temp = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    arr[arr.length - 1] = temp;
}

console.log("rotate by k =", arr);
```

### Output

```text
rotate by k = [30, 40, 50, 10, 20]
```

### Why `k = k % arr.length`?

Suppose:

```text
array length = 5
k = 7
```

Rotating left 5 times returns the original array.

Therefore:

```text
7 % 5 = 2
```

So rotating 7 times is equivalent to rotating 2 times.

### Pseudocode

```text
START

Input array
Input k

k = k MOD length of array

FOR rotation = 1 to k

    Store first element in temp

    FOR i = 1 to last index
        Copy array[i] to array[i - 1]
    END FOR

    Put temp at last index

END FOR

Print array

END
```

### Complexity

```text
Time  : O(n × k)
Space : O(1)
```

This is easy to understand, but it is not the most optimized solution.

---

# Q49. Left Rotation by K — Optimized Reversal Method

The reversal algorithm can rotate the array in `O(n)` time.

For:

```text
[10, 20, 30, 40, 50]
k = 2
```

### Step 1 — Reverse first `k` elements

```text
[20, 10, 30, 40, 50]
```

### Step 2 — Reverse remaining elements

```text
[20, 10, 50, 40, 30]
```

### Step 3 — Reverse the entire array

```text
[30, 40, 50, 10, 20]
```

### Complexity

```text
Time  : O(n)
Space : O(1)
```

---

# Q50. Count Sub-arrays Whose Sum Equals Target

### Problem

Given an array and a target, count how many **contiguous sub-arrays** have a sum equal to the target.

Example:

```js
let arr = [1, 2, 3, 4, 5];
let target = 5;
```

Valid sub-arrays are:

```text
[2, 3] → 5
[5]    → 5
```

Therefore:

```text
Count = 2
```

## What is a Sub-array?

A sub-array is a **contiguous portion** of an array.

For:

```text
[1, 2, 3]
```

Valid sub-arrays include:

```text
[1]
[2]
[3]
[1, 2]
[2, 3]
[1, 2, 3]
```

But:

```text
[1, 3]
```

is not a sub-array because the elements are not continuous.

---

## Brute-Force Code

```js
let arr = [1, 2, 3, 4, 5];
let target = 5;
let count = 0;

for (let i = 0; i < arr.length; i++) {

    let sum = 0;

    for (let j = i; j < arr.length; j++) {

        sum += arr[j];

        if (sum === target) {
            count++;
        }
    }
}

console.log(`Count of sub-arrays = ${count}`);
```

### Output

```text
Count of sub-arrays = 2
```

---

## Logic

There are two loops.

### Outer loop

```js
for (let i = 0; i < arr.length; i++)
```

`i` represents the starting index of the sub-array.

### Inner loop

```js
for (let j = i; j < arr.length; j++)
```

`j` expands the sub-array from the selected starting index.

For every new element:

```js
sum += arr[j];
```

Then:

```js
if (sum === target) {
    count++;
}
```

If the current sum equals the target, we found one valid sub-array.

---

## Dry Run

Array:

```text
[1, 2, 3, 4, 5]
```

Target:

```text
5
```

Starting at index `0`:

```text
[1]             → 1
[1,2]           → 3
[1,2,3]         → 6
[1,2,3,4]       → 10
[1,2,3,4,5]     → 15
```

No match.

Starting at index `1`:

```text
[2]             → 2
[2,3]           → 5  ✓
[2,3,4]         → 9
[2,3,4,5]       → 14
```

Count = `1`.

Starting at index `2`:

```text
[3]             → 3
[3,4]           → 7
[3,4,5]         → 12
```

No match.

Starting at index `3`:

```text
[4]             → 4
[4,5]           → 9
```

No match.

Starting at index `4`:

```text
[5]             → 5  ✓
```

Count = `2`.

Final answer:

```text
Count = 2
```

---

## Pseudocode

```text
START

Input array
Input target

Set count = 0

FOR i = 0 to last index

    Set sum = 0

    FOR j = i to last index

        sum = sum + array[j]

        IF sum equals target
            count = count + 1
        END IF

    END FOR

END FOR

Print count

END
```

### Complexity

```text
Time  : O(n²)
Space : O(1)
```

---

# Mistakes in the Original Q50 Code

Original idea:

```js
let arr = [1, 2, 3, 4, 5];
let sum;

for (let i = 0; i < arr.length; i++) {
    sum = 0;

    for (j = 0; j < i; j++) {
        sum += i + j;
    }
}
```

### Mistake 1 — No target

The problem asks for a target sum.

```js
let target = 5;
```

### Mistake 2 — `j` starts from the wrong position

Incorrect:

```js
for (let j = 0; j < i; j++)
```

Correct:

```js
for (let j = i; j < arr.length; j++)
```

`i` is the starting point and `j` expands the sub-array.

### Mistake 3 — Adding indexes instead of values

Incorrect:

```js
sum += i + j;
```

Correct:

```js
sum += arr[j];
```

We need the values stored in the array, not their indexes.

### Mistake 4 — No count

We need:

```js
let count = 0;
```

and:

```js
if (sum === target) {
    count++;
}
```

### Mistake 5 — `j` should be declared

Incorrect:

```js
for (j = ...)
```

Correct:

```js
for (let j = ...)
```

---

# Quick Revision

| Question | Main Idea | Time | Space |
|---|---|---:|---:|
| Q48 Left Rotate by 1 | Save first → shift left → put first at end | O(n) | O(1) |
| Q48 Right Rotate by 1 | Save last → shift right → put last at start | O(n) | O(1) |
| Q49 Left Rotate by K | Repeat left rotation `k` times | O(n × k) | O(1) |
| Q49 Optimized Left Rotate K | Reversal algorithm | O(n) | O(1) |
| Q50 Count sub-arrays | Start at `i`, expand with `j`, maintain sum | O(n²) | O(1) |

## Important DSA Patterns

```text
LEFT ROTATION
Save first element
Shift LEFT
Put saved element at END

RIGHT ROTATION
Save last element
Shift RIGHT
Put saved element at START

ROTATION BY K
k = k % n

SUB-ARRAY SUM
i = starting index
j = ending/expanding index
sum += arr[j]
if sum == target → count++
```
