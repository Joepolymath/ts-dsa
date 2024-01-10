// using array under the hood
class Stack1 {
  private data: any[];
  private size: number;

  constructor() {
    this.data = [];
    this.size = 0;
  }

  public push(value: any) {
    this.size++;
    return this.data.push(value); // returning the new length of the array
  }

  public pop() {
    this.size--;
    return this.data.pop();
  }

  public length() {
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
