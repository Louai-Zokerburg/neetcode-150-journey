# 🧩 Problem #01: Contains Duplicate

## 📝 Problem Statement

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is **distinct**.

**LeetCode Link:** [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

---

## 💡 Example

### Example 1

```

Input: nums = \[1, 2, 3, 1]
Output: true

```

### Example 2

```

Input: nums = \[1, 2, 3, 4]
Output: false

```

### Example 3

```

Input: nums = \[1,1,1,3,3,4,3,2,4,2]
Output: true

````

---

## ✅ Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

---

## 🧠 Approach

We use a **HashSet** to track the numbers we've already seen.  
If we encounter a number that's already in the set, we return `true` immediately.  
If we finish the loop without finding a duplicate, we return `false`.

---

## ⏱️ Time and Space Complexity

| Complexity | Value       |
|------------|-------------|
| 🕒 Time     | O(n)        |
| 🧠 Space    | O(n)        |

- `n` is the length of the input array
- We may store up to `n` unique elements in the set

---


## 🧠 Code (index.ts)

```ts
export const containsDuplicate = (input: number[]): boolean => {
  const seen: Set<number> = new Set();

  for (let i = 0; i < input.length; i++) {
    if (seen.has(input[i])) {
      return true;
    }

    seen.add(input[i]);
  }

  return false;
}
```
