function topKFrequent(nums: number[], k: number): number[] {
  const hash: {
    [key: number]: number;
  } = {};
  const frequency: number[][] = Array.apply(null, Array(nums.length + 1)).map(
    () => []
  );

  nums.forEach((num) => {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  });

  Object.keys(hash).forEach((item: any) => {
    const element = Number(item);
    frequency[hash[item]].push(element);
  });

  // preparing and finalizing result
  const result = [];
  for (let i = frequency.length - 1; i >= 0; i--) {
    for (let j = 0; j < frequency[i].length; j++) {
      result.push(frequency[i][j]);
      if (result.length === k) {
        return result;
      }
    }
  }
  return result;
}

function topKFrequent2(nums: number[], k: number): number[] {
  let m = new Map();

  nums.forEach((num) => {
    let a = m.get(num);
    if (a) {
      m.set(num, a + 1);
    } else {
      m.set(num, 1);
    }
  });

  const sortedArr = Array.from(
    new Map([...m.entries()].sort((a, b) => b[1] - a[1])).keys()
  );

  return sortedArr.slice(0, k);
}
