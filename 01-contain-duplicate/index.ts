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


// Smarter, Cleaner Solution
export const containsDuplicate2 = (input: number[]): boolean => {
  return new Set<number>(input).size === input.length;
}
