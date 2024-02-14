class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTreeRecursion<T> {
  root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T, currentNode: TreeNode<T> | null = this.root): boolean {
    const newNode = new TreeNode<T>(value);
    console.log({ currentNode });
    if (this.root === null) {
      this.root = newNode;
      return true;
    }
    if (!currentNode) {
      return false;
    }
    if (currentNode.value === value) return true;
    if (value < currentNode?.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return true;
      }
      return this.insert(value, currentNode.left);
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return true;
      }
      return this.insert(value, currentNode.right);
    }
  }

  find(value: T) {
    if (this.root === null) return false;
    if (this.root.value === value) {
      return true;
    }
    let current: TreeNode<T> | null = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return null;
    return current;
  }

  contains(value: T) {
    if (this.root === null) {
      return false;
    }
    let current: TreeNode<T> | null = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }
}

export default BinarySearchTreeRecursion;
