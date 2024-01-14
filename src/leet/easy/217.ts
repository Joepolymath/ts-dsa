function containsDuplicate(nums: number[]): boolean {
  // loop through and take note of the elements in a hash table (mem)
  const memory: any = {};
  for (let elem of nums) {
    if (memory[elem]) {
      return true;
    }
    memory[elem] = true;
  }
  return false;
}
