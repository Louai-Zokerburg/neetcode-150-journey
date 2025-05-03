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
