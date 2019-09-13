class LinkedListNode<T> {
  next: any;

  constructor(public value: T) {
    this.next = null;
  }
}

interface LinkedListInterface {
  head: any;
  tail: any;
}

export default class LinkedList<T> implements LinkedListInterface {
  head: any = null;
  tail: any = null;

  push(arg: T) {
    if (this.head === null) {
      this.head = new LinkedListNode<T>(arg);
      this.tail = this.head;
    } else {
      this.tail.next = new LinkedListNode<T>(arg);
      this.tail = this.tail.next;
    }
  }

  pop(): T {
    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    // last node will not have a previous linked node
    if (prev) {
      this.tail = prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return current.value;
  }

  shift(): T {
    let next = this.head.next;
    let temp = this.head;

    this.head = next;

    return temp.value;
  }

  unshift(arg: T) {
    let temp = new LinkedListNode(arg);
    temp.next = this.head;
    this.head = temp;
  }

  count(): number {
    let counter = 0;

    if (!this.head) {
      return counter;
    }

    let pointer = this.head;

    while (pointer) {
      pointer = pointer.next;
      counter += 1;
    }

    return counter;
  }

  delete(arg: T) {
    let current = this.head;
    let prev = null;

    while (current || (current && current.value === arg)) {
      if (current.value === arg) {
        if (prev) {
          prev.next = current.next;
        } else if (current.next) {
          this.head = current.next;
        } else {
          this.head = null;
        }
      }

      prev = current;
      current = current.next;
    }
  }
}
