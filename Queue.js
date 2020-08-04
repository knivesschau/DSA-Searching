'use strict';

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

   enqueue(data) {
       const newNode = new _Node(data);

       if (this.first === null) {
           this.first = newNode;
       }

       if (this.last) {
           this.last.next = newNode;
       }

       this.last = newNode;
       this.length++;
   }

   dequeue() {
       if (this.first === null) {
           return;
       }

       const node = this.first;
       this.first = this.first.next; 

       if (node === this.last) {
           this.last = null;
       }
       this.length--;
       return node.value;
   }
}

module.exports = Queue;