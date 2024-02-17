// Question Link: https://leetcode.com/problems/valid-anagram/
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const memory: any = {};
  const memory2: any = {};

  for (let element of s) {
    if (memory[element]) {
      memory[element] = memory[element] + 1;
    } else {
      memory[element] = 1;
    }
  }
  for (let element of t) {
    if (memory2[element]) {
      memory2[element] = memory2[element] + 1;
    } else {
      memory2[element] = 1;
    }
  }

  const keys = Object.keys(memory);
  for (let key of keys) {
    if (memory[key] !== memory2[key]) {
      return false;
    }
  }

  return true;
}
