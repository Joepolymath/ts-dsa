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

  contains(value: T, node: TreeNode<T> | null = this.root): boolean {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.contains(value, node.left);
    } else if (value > node.value) {
      return this.contains(value, node.right);
    } else {
      return true;
    }
  }

  inOrderTraversal(node: TreeNode<T> | null = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  preOrderTraversal(node: TreeNode<T> | null = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  postOrderTraversal(node: TreeNode<T> | null = this.root) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }
}

export default BinarySearchTreeRecursion;
