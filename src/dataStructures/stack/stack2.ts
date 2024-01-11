// using singly linked list

class StackNode {
  readonly data: any;
  next: any | StackNode;

  constructor(value: any) {
    this.data = value;
    this.next = null;
  }
}

class Stack2 {
  private head: null | StackNode;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value: any) {
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

export default Stack2;
