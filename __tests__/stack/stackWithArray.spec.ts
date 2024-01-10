import DataStructure from '../../src/dataStructures/';
import { describe, test, expect } from '@jest/globals';

describe('Stacks with Arrays', () => {
  test('Verify empty stack: Returns true', () => {
    // create new stack
    const stack = new DataStructure.stackWithArray();
    expect(stack.isEmpty()).toBe(true);
  });

  test('Add data to stack: Returns new length of the stack', () => {
    const stack = new DataStructure.stackWithArray();
    expect(stack.push(55)).toBe(1);
  });

  test('Remove last element from stack: Returns the element', () => {
    const stack = new DataStructure.stackWithArray();
    stack.push(55);
    stack.push({
      name: 'Joepolymath',
    });
    stack.push(60);
    expect(stack.pop()).toBe(60);
  });

  test('View last element of stack: Returns the last element', () => {
    const stack = new DataStructure.stackWithArray();
    stack.push(55);
    stack.push({
      name: 'Joepolymath',
    });
    stack.push(60);
    expect(stack.peek()).toBe(60);
  });

  test('View the full stack: Returns the whole stack', () => {
    const stack = new DataStructure.stackWithArray();
    stack.push(55);
    stack.push({
      name: 'Joepolymath',
    });
    stack.push(60);
    expect(stack.getBuffer()).toStrictEqual([
      55,
      {
        name: 'Joepolymath',
      },
      60,
    ]);
  });
});
