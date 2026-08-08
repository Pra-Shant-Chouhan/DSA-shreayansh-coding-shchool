# Array Part 1 — JavaScript DSA Notes

## 1. Why do we use an Array?

### Main reason

An array stores multiple related values inside a single variable and allows us to access each value using an index.

```js
let marks = [85, 90, 78, 92, 88];

console.log(marks[0]); // 85
console.log(marks[3]); // 92
```

### Why arrays are important in DSA

- Store multiple values in one variable.
- Access elements using an index.
- Traverse elements using loops.
- Search, sort, reverse, rotate, and modify data.
- Arrays are the foundation of many DSA problems.

### Pseudocode

```text
START

Create an array containing multiple values

FOR each index from 0 to array length - 1
    Access the element at current index
END FOR

END
```

---

# 2. Calculate Sum and Mean of an Array

### Problem

Find the sum and mean of all elements.

Example:

```text
Input:
4
-3 0 3 6

Sum  = 6
Mean = 1.5
```

### JavaScript

```js
function calculateSumAndMean(arr, n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    let mean = Number((sum / n).toFixed(1));

    return [sum, mean];
}

module.exports = { calculateSumAndMean };
```

### Explanation

Start with:

```js
let sum = 0;
```

Then visit every element:

```js
sum += arr[i];
```

After the loop:

```js
mean = sum / n;
```

`toFixed(1)` keeps one decimal place.

### Important mistake

Do NOT do:

```js
Math.round(sum / n).toFixed(1);
```

because `Math.round()` changes the value before formatting it.

For example:

```js
Math.round(1.5); // 2
```

But the required mean is:

```text
1.5
```

### Pseudocode

```text
START

Set sum = 0

FOR i = 0 to n - 1
    sum = sum + arr[i]
END FOR

mean = sum / n

Round mean to 1 decimal place if required

RETURN sum and mean

END
```

---

# 3. Find Greatest Element and Its Index

### Problem

Find the largest element and the index where it occurs.

Example:

```text
Input:
[10, 25, 8, 30, 15]

Output:
Max element = 30
Index = 3
```

### JavaScript

```js
function findGreatestElementAndIndex(arr) {
    let max = arr[0];
    let ind = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            ind = i;
        }
    }

    return [max, ind];
}

module.exports = { findGreatestElementAndIndex };
```

### Explanation

Initially assume the first element is greatest:

```js
let max = arr[0];
let ind = 0;
```

Start checking from index `1`.

If the current element is greater:

```js
if (arr[i] > max)
```

update both:

```js
max = arr[i];
ind = i;
```

### Why start from `i = 1`?

Because `arr[0]` is already stored in `max`.

### Pseudocode

```text
START

Set max = first element
Set index = 0

FOR i = 1 to n - 1

    IF arr[i] > max
        max = arr[i]
        index = i
    END IF

END FOR

RETURN max and index

END
```

---

# 4. Why `return [max, ind]`?

A function can return one value.

An array is itself one value, so we can put multiple results inside it.

```js
return [max, ind];
```

For example:

```js
let result = [30, 3];
```

Here:

```text
result[0] = 30
result[1] = 3
```

### Important

This is NOT the same:

```js
return max, ind;
```

The comma operator returns only the last expression.

```js
return 10, 20;
```

returns:

```text
20
```

### Correct alternatives

Array:

```js
return [max, ind];
```

Object:

```js
return {
    max: max,
    index: ind
};
```

String:

```js
return `Max element = ${max} found at index ${ind}`;
```

---

# 5. Find Second Greatest Element

### Problem

Find the second largest element in an array.

Example:

```text
Input:
[10, 23, 45, 67, 89]

Greatest       = 89
Second greatest = 67
```

### JavaScript

```js
function findSecondGreatestElement(arr) {
    let max = Math.max(arr[0], arr[1]);
    let secondMax = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

module.exports = { findSecondGreatestElement };
```

### Important error

Wrong:

```js
arr.lenth
```

Correct:

```js
arr.length
```

Because `lenth` does not exist.

```js
arr.lenth // undefined
```

Therefore:

```js
i < arr.lenth
```

becomes effectively:

```js
i < undefined
```

and the loop does not execute.

### Pseudocode

```text
START

Set max = greater of first two elements
Set secondMax = smaller of first two elements

FOR i = 2 to n - 1

    IF arr[i] > max

        secondMax = max
        max = arr[i]

    ELSE IF arr[i] > secondMax
            AND arr[i] is not equal to max

        secondMax = arr[i]

    END IF

END FOR

RETURN secondMax

END
```

### Dry run

```text
Array = [10, 23, 45, 67, 89]

Initial:
max = 23
secondMax = 10

23 -> already max
45 -> max = 45, secondMax = 23
67 -> max = 67, secondMax = 45
89 -> max = 89, secondMax = 67

Answer = 67
```

---

# 6. Array Index

Array indexes start from `0`.

```js
let arr = [10, 20, 30, 40];
```

| Index | Value |
|------:|------:|
| 0 | 10 |
| 1 | 20 |
| 2 | 30 |
| 3 | 40 |

```js
arr[0] // 10
arr[2] // 30
```

Last element:

```js
arr[arr.length - 1]
```

---

# 7. Traversing an Array

Traversal means visiting every element.

### Using for loop

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

### Pseudocode

```text
START

FOR i = 0 to array length - 1
    Print arr[i]
END FOR

END
```

---

# 8. Swapping Two Array Elements

Swapping means exchanging the values of two positions.

Example:

```text
Before:
[10, 20]

After:
[20, 10]
```

## Method 1 — Temporary Variable

This is the most important method for understanding swapping.

```js
let temp = arr[i];

arr[i] = arr[j];

arr[j] = temp;
```

### Example

```js
let arr = [10, 20];

let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

console.log(arr);
// [20, 10]
```

### Step-by-step

Initially:

```text
arr[0] = 10
arr[1] = 20
```

Step 1:

```js
temp = arr[0];
```

Now:

```text
temp = 10
arr[0] = 10
arr[1] = 20
```

Step 2:

```js
arr[0] = arr[1];
```

Now:

```text
temp = 10
arr[0] = 20
arr[1] = 20
```

Step 3:

```js
arr[1] = temp;
```

Final:

```text
arr[0] = 20
arr[1] = 10
```

### Pseudocode

```text
START

temp = first value

first value = second value

second value = temp

END
```

---

# 9. Swap Using Destructuring

JavaScript provides a shorter way:

```js
[arr[i], arr[j]] = [arr[j], arr[i]];
```

Example:

```js
let arr = [10, 20];

[arr[0], arr[1]] = [arr[1], arr[0]];

console.log(arr);
// [20, 10]
```

### How to understand it

Right side is evaluated first:

```js
[arr[1], arr[0]]
```

becomes:

```js
[20, 10]
```

Then values are assigned:

```text
arr[0] = 20
arr[1] = 10
```

### Pseudocode

```text
START

Take value at second position
Take value at first position

Assign second value to first position
Assign first value to second position

END
```

---

# 10. Swap Using Arithmetic

For numbers, another traditional method is:

```js
let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;
```

Result:

```text
a = 20
b = 10
```

### Important limitation

This method is generally NOT preferred in modern JavaScript.

Problems include:

- Only works with numbers.
- Can be harder to read.
- Can cause numeric overflow in languages with fixed-width integers.
- Destructuring is clearer in JavaScript.

Prefer:

```js
[a, b] = [b, a];
```

or the temporary variable method.

---

# 11. Swap Using XOR

For integer values, XOR can theoretically swap values:

```js
a = a ^ b;
b = a ^ b;
a = a ^ b;
```

But this is usually **not recommended in JavaScript**.

JavaScript bitwise operators convert numbers to signed 32-bit integers, so this approach has limitations.

For DSA learning, understand it as a technique, but prefer:

```js
[a, b] = [b, a];
```

---

# 12. Swap Methods Comparison

| Method | Example | Recommended? |
|---|---|---|
| Temporary variable | `temp = a` | Yes — best for learning |
| Destructuring | `[a,b] = [b,a]` | Yes — modern JS |
| Arithmetic | `a=a+b` | Usually no |
| XOR | `a=a^b` | Usually no |

### Best practice

For learning DSA:

```js
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
```

For modern JavaScript:

```js
[arr[i], arr[j]] = [arr[j], arr[i]];
```

---

# 13. Common Array Mistakes

## Mistake 1 — `length` spelling

Wrong:

```js
arr.lenth
```

Correct:

```js
arr.length
```

---

## Mistake 2 — Starting index incorrectly

For an array:

```js
[10, 20, 30, 40]
```

indexes are:

```text
0  1  2  3
```

Not:

```text
1  2  3  4
```

---

## Mistake 3 — Using `Math.round()` before `toFixed()`

Wrong:

```js
Math.round(mean).toFixed(1)
```

Correct:

```js
mean.toFixed(1)
```

If a number is required:

```js
Number(mean.toFixed(1))
```

---

## Mistake 4 — Using comma with return

Wrong:

```js
return max, ind;
```

Correct:

```js
return [max, ind];
```

---

## Mistake 5 — Forgetting to update the index

When finding the maximum:

```js
if (arr[i] > max) {
    max = arr[i];
    ind = i;
}
```

Both `max` and `ind` must be updated.

---

# 14. Important Array DSA Pattern

Many array problems follow this structure:

```text
START

Initialize required variables

FOR each element in the array

    Check the current element

    Update required variables

END FOR

Return the answer

END
```

Example for maximum:

```text
Initialize max

FOR every element
    IF current element > max
        update max
    END IF
END FOR

Return max
```

This pattern is extremely important for solving array problems.

---

# Quick Revision

### Array

```js
let arr = [10, 20, 30];
```

### Length

```js
arr.length
```

### First element

```js
arr[0]
```

### Last element

```js
arr[arr.length - 1]
```

### Traverse

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

### Maximum

```js
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
```

### Swap with temporary variable

```js
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
```

### Modern swap

```js
[arr[i], arr[j]] = [arr[j], arr[i]];
```

### Return multiple values

```js
return [max, ind];
```

---

## Key DSA Rule

When solving an array problem, first ask:

1. What do I need to find?
2. What variables do I need to track?
3. Where should I initialize them?
4. How will I traverse the array?
5. What condition should I check?
6. What should I update?
7. What should I return?

This gives you a repeatable approach instead of trying to memorize every solution.
