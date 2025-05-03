# 🧩 Problem #02: Valid Anagram

## 📝 Problem Statement

Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using **all** the original letters exactly once.

**LeetCode Link:** [Valid Anagram](https://leetcode.com/problems/valid-anagram/)

---

## 💡 Example

### Example 1

Input: s = "anagram", t = "nagaram"  
Output: true

### Example 2

Input: s = "rat", t = "car"  
Output: false

### Example 3

Input: s = "aacc", t = "ccac"  
Output: false

---

## ✅ Constraints

- 1 <= s.length, t.length <= 5 * 10⁴
- `s` and `t` consist of lowercase English letters

---

## 🧠 Approach

We use a **character frequency map** to count occurrences of each character in `s`.  
Then we subtract the frequency using characters from `t`.

If all values in the frequency map are zero at the end, the strings are anagrams.

---

## ⏱️ Time and Space Complexity

| Complexity | Value       |
|------------|-------------|
| 🕒 Time     | O(n)        |
| 🧠 Space    | O(1)        |

- `n` is the length of the strings
- Space is constant because the alphabet size is fixed (26 lowercase letters)

---

## 🧠 Code (index.ts)

```ts
export const validAnagram = (inputOne: string, inputTwo: string): boolean => {
  if (inputOne.length !== inputTwo.length) return false;

  const charachterMap: Record<string, number> = {}

  for (let i = 0; i < inputOne.length; i++) {
    if (charachterMap[inputOne[i]]) {
      charachterMap[inputOne[i]]++;
    } else {
      charachterMap[inputOne[i]] = 1;
    }
  }

  for (let i = 0; i < inputTwo.length; i++) {
    if (charachterMap[inputTwo[i]]) {
      charachterMap[inputTwo[i]]--;
    } else {
      charachterMap[inputTwo[i]] = 1;
    }
  }

  for (const count of Object.values(charachterMap)) {
    if (count !== 0) return false;
  }

  return true
}

