// using singly linked list

class StackNode<T> {
  readonly data: T;
  next: any | StackNode<T>;

  constructor(value: T) {
    this.data = value;
    this.next = null;
  }
}

class Stack<T> {
  private head: null | StackNode<T>;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value: T) {
    if (value === null) {
      return null;
    }
    if (this.head === null) {
      this.head = new StackNode(value);
    } else {
      let temp = this.head;
      this.head = new StackNode(value);
      this.head.next = temp;
    }
    this.size++;
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    let headToBePopped = this.head;
    this.head = this.head.next;
    this.size--;
    return headToBePopped.data;
  }

  //   Peeking means returning the last added element to the stack without removing it from stack.
  peek() {
    return this.head?.data;
  }

  getBuffer() {
    if (this.head === null) {
      return null;
    }
    // I am only interested in sending the data
    const dataArray = [];
    let temp = this.head;
    while (temp !== null) {
      dataArray.unshift(temp.data);
      temp = temp.next;
    }
    console.log({ dataArray });
    return dataArray;
  }

  getSize() {
    return this.size;
  }
}

function isValid(s: string): boolean {
  const stack = new Stack<string>();
  const brackets: any = { '{': '}', '(': ')', '[': ']' };

  for (let char of s) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      const lastOpen: any = stack.pop();
      if (brackets[lastOpen] !== char) {
        return false;
      }
    }
  }
  if (!stack.isEmpty()) {
    return false;
  }
  return true;
}
