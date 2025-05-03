import { test, expect } from 'bun:test'
import { containsDuplicate } from './index'

test('basic duplicate', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
})

test('no duplicates', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
})

test('multiple duplicates', () => {
  expect(containsDuplicate([1, 2, 3, 4, 2, 5, 6, 1])).toBe(true)
})

test('only one element', () => {
  expect(containsDuplicate([99])).toBe(false)
})

test('two same elements', () => {
  expect(containsDuplicate([7, 7])).toBe(true)
})

test('empty array', () => {
  expect(containsDuplicate([])).toBe(false)
})

test('large array with no duplicates', () => {
  const arr = Array.from({ length: 100_000 }, (_, i) => i)
  expect(containsDuplicate(arr)).toBe(false)
})

test('large array with one duplicate at the end', () => {
  const arr = Array.from({ length: 100_000 }, (_, i) => i)
  arr.push(99999)
  expect(containsDuplicate(arr)).toBe(true)
})

test('all duplicates', () => {
  expect(containsDuplicate([1, 1, 1, 1])).toBe(true)
})

test('negative numbers and zero', () => {
  expect(containsDuplicate([-1, -2, 0, 1, 2, -1])).toBe(true)
})

test('includes very large numbers', () => {
  expect(containsDuplicate([Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER])).toBe(true)
})
