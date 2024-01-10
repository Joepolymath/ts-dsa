import DataStructure from '../../src/dataStructures/';
import { describe, test, expect } from '@jest/globals';

describe('Stacks with Arrays', () => {
  test('Verify empty stack: Returns true', () => {
    // create new stack
    const stack = new DataStructure.stackWithArray();
    expect(stack.isEmpty()).toBe(true);
  });
});
