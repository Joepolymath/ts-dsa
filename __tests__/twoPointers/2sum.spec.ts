import DSA from '../../src';
import { describe, test, expect } from '@jest/globals';

describe('2 pointer technique', () => {
  test('2SUM PROBLEM: Returns the correct indices that sums up to yield the target', () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7];
    const target = 7;
    expect(DSA.techniques.twoSum(testArray, target)).toEqual([0, 5]);
  });
});
