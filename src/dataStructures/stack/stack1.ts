// using array under the hood
class Stack1<T> {
  private data: T[];
  private size: number;

  constructor() {
    this.data = [];
    this.size = 0;
  }

  public push(value: T) {
    if (value == null) {
      return null;
    }
    this.size++;
    return this.data.push(value); // returning the new length of the array
  }

  public pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.size--;
    return this.data.pop();
  }

  public getSize() {
    return this.size;
  }

  //   view complete stack
  public getBuffer() {
    return this.data.slice();
  }

  //   check if stack is empty
  public isEmpty() {
    return this.data.length === 0;
  }

  //   Peeking means returning the last added element to the stack without removing it from stack.
  public peek() {
    return this.data[this.size - 1];
  }
}

export default Stack1;
