// Question: https://leetcode.com/problems/group-anagrams/
function groupAnagrams(strs: string[]): string[][] {
  const groupHash: {
    [key: string]: string[];
  } = {};

  for (let word of strs) {
    const sortedCharacters = word.split('').sort().join('');
    if (!groupHash[sortedCharacters]) {
      groupHash[sortedCharacters] = [word];
    } else {
      groupHash[sortedCharacters].push(word);
    }
  }
  return Object.values(groupHash);
}
