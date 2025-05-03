# 🧩 Problem #02: Two Sum

## 📝 Problem Statement

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers* such that they add up to the target.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in **any order**.

**LeetCode Link:** [Two Sum](https://leetcode.com/problems/two-sum/)

---

## 💡 Example

### Example 1

Input: nums = [2, 7, 11, 15], target = 9  
Output: [0, 1]

### Example 2

Input: nums = [3, 2, 4], target = 6  
Output: [1, 2]

### Example 3

Input: nums = [3, 3], target = 6  
Output: [0, 1]

---

## ✅ Constraints

- 2 <= nums.length <= 10⁴  
- -10⁹ <= nums[i] <= 10⁹  
- -10⁹ <= target <= 10⁹  
- **Only one valid answer exists**

---

## 🧠 Approach

We use a **hash map** to store the numbers we've seen so far as keys, and their indices as values.

For each element, we compute the value needed to reach the target (`target - current number`).  
If that value already exists in our map, we've found our answer.

Otherwise, we store the current number and its index in the map.

This makes the solution very efficient since we avoid nested loops.

---

## ⏱️ Time and Space Complexity

| Complexity | Value       |
|------------|-------------|
| 🕒 Time     | O(n)        |
| 🧠 Space    | O(n)        |

- We iterate over the array once.
- We store up to `n` elements in the hash map.

---

## 🧠 Code (index.ts)

```ts
export const twoSum = (nums: number[], target: number): [number, number] => {

  const condidates: Record<number, number> = {}

  for (let i = 0; i < nums.length; i++) {

    const needed = target - nums[i]

    if (condidates[needed] !== undefined) {
      return [condidates[needed], i]
    }

    condidates[nums[i]] = i;
  }

  throw new Error("No two sum solution")
}

