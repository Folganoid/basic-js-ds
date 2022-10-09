const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {

  constructor() {
    this.pivot = null;
  }

  createNode(val, next = null) {
    return {
      value: val,
      next: next
    }
  }

  getUnderlyingList() {
    return this.pivot;
  }

  enqueue(value) {
    if (this.pivot === null) {
      this.pivot = this.createNode(value);
    } else {

      let cur = this.pivot;

      for(;;) {
        if (cur.next === null) break;
        cur = cur.next;
      }
      cur.next = this.createNode(value);
    }
  }

  dequeue() {
    let res = this.pivot.value;
    this.pivot = this.pivot.next; 
    return res;
  }
}

module.exports = {
  Queue
};
