export class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
  }

  delete(value) {
    if (!this.head) return;
    if (!this.head.value === value) {
      this.head = this.head.next;
    }
    let curr = this.head;
    if (curr.next && curr.next.value !== value) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
    }
  }

  toArray() {
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr);
      curr = curr.next;
    }
    return arr;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(value) {
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
    newNode.prev = curr;
  }

  delete(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      return;
    }
    let curr = this.head;
    while (curr && curr.value !== value) {
      curr = curr.next;
    }
    if (curr) {
      if (curr.prev) curr.prev.next = curr.next;
      if (curr.next) curr.next.prev = curr.prev;
    }
  }

  toArray() {
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr);
      curr = curr.next;
    }
    return arr;
  }
}
