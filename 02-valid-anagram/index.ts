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
