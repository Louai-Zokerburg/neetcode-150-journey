import { describe, test, expect } from 'bun:test';

import { validAnagram } from "./index";

describe("validAnagram", () => {
  test("basic anagram", () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
  });

  test("not an anagram (different letters)", () => {
    expect(validAnagram("rat", "car")).toBe(false);
  });

  test("same characters, different frequencies", () => {
    expect(validAnagram("aacc", "ccac")).toBe(false);
  });

  test("empty strings", () => {
    expect(validAnagram("", "")).toBe(true);
  });

  test("different lengths", () => {
    expect(validAnagram("a", "ab")).toBe(false);
  });

  test("one character each, same", () => {
    expect(validAnagram("x", "x")).toBe(true);
  });

  test("one character each, different", () => {
    expect(validAnagram("x", "y")).toBe(false);
  });

  test("long anagram", () => {
    const a = "abcdeffghijklmnopqrstuvwxyz";
    const b = "zyxwvutsrqponmlkjihgffeedcba";
    expect(validAnagram(a, b)).toBe(false);
  });

  test("case sensitivity matters", () => {
    expect(validAnagram("Listen", "Silent")).toBe(false);
  });

  test("unicode characters", () => {
    expect(validAnagram("déjà", "jàdé")).toBe(true);
  });

  test("numbers and symbols", () => {
    expect(validAnagram("123@!", "@!321")).toBe(true);
  });

  test("not valid case", () => {
    expect(validAnagram("aa", "bb")).toBe(false);
  });
});
