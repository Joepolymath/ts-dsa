import DataStructures from '../../src/dataStructures';
import { describe, test, expect } from '@jest/globals';

describe('Binary Search Tree', () => {
  test('Insert to tree: Returns true', () => {
    const tree = new DataStructures.binarySearchTree<number>();
    expect(tree.insert(5)).toBe(true);
  });

  test('Contains a value: Returns true', () => {
    const tree = new DataStructures.binarySearchTree<number>();
    tree.insert(5);
    tree.insert(12);
    tree.insert(2);
    expect(tree.contains(12)).toBe(true);
  });

  test('Not Contains a Value: Returns false', () => {
    const tree = new DataStructures.binarySearchTree<number>();
    tree.insert(5);
    tree.insert(12);
    tree.insert(2);
    expect(tree.contains(15)).toBe(false);
  });
});
