function longestCommonPrefix(strs: string[]): string {
  let prefix = '';
  const firstElement = strs[0];

  for (let j = 0; j < firstElement.length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (firstElement[j] !== strs[i][j]) {
        return prefix;
      }
    }
    prefix += firstElement[j];
  }
  return prefix;
}
