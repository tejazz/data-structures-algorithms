// Stacks

// google
// udemy.com
// youtube

// Usage => Arrays, Linked Lists
// Both works fairly well

// Queues

// Matt -- Joy -- Samir --Pavel
// Arrays => More inefficient since unshift happens
// Linked Lists => Since you need to only change the pointer

// How Javascript Works?

// What is a program?
// - allocate memory
// - parse and execute scripts

// Stack Overflow

// function foo() {
//     foo();
// }

// foo();


// Priorities
// CALL STACK => CALLBACK 

// STACK - Linked List Implementation

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// Linked list Implementation

// class Stack {
//     constructor() {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }

//     peek() {
//         console.log(this.top);
//     }

//     pop() {
//         if (!this.top) {
//             return this.printStack();
//         }

//         let deleteNode = this.top;
//         this.top = this.top.next;
//         this.length--;

//         if (this.length === 0) {
//             this.bottom = null;
//         }

//         return this.printStack();
//     }

//     push(value) {
//         let newNode = new Node(value);

//         if (this.length === 0) {
//             this.top = newNode;
//             this.bottom = newNode;
//             this.length++;
//             return this.printStack();
//         }

//         newNode.next = this.top;
//         this.top = newNode;
//         this.length++;
//         return this.printStack();
//     }

//     isEmpty() {
//         if (!this.top) {
//             return console.log(true);
//         }

//         return console.log(false);
//     }

//     printStack() {
//         let currentNode = this.top;
//         let flatArray = [];

//         while(currentNode !== null) {
//             flatArray.push(currentNode.value);
//             currentNode = currentNode.next;
//         }

//         console.log(flatArray);
//     }
// } 

// Array Implementation

// class Stack {
//     constructor() {
//         this.stack = new Array();
//         this.length = 0;
//     }

//     printStack() {
//         console.log(this.stack);
//     }

//     push(value) {
//         this.stack.push(value);
//         this.length++;
//         return this.printStack();
//     }

//     pop() {
//         this.stack.pop();
//         this.length--;
//         return this.printStack();
//     }

//     peek() {
//         return this.stack[this.length - 1];
//     }

//     isEmpty() {
//         if (this.length === 0) {
//             return console.log(true);
//         }

//         return console.log(false);
//     }
// }

// let myStack = new Stack();

// Example Input:
// Discord, Google, Udemy
// myStack.push('Discord');
// myStack.push('Google');
// myStack.push('Udemy');
// myStack.pop();
// myStack.peek();
// myStack.isEmpty();

// console.log(myStack);

// QUEUE

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.length = 0;
//     }

//     peek() {
//         console.log(this.first);
//     }

//     enqueue(value) {
//         let newNode = new Node(value);

//         if (!this.first) {
//             this.first = newNode;
//             this.last = newNode;
//             this.length++;
//             return this.printQueue();
//         }

//         this.last.next = newNode;
//         this.last = newNode;
//         this.length++;
//         return this.printQueue();
//     }

//     dequeue() {
//         if (this.length === 0) {
//             return this.printQueue();
//         }

//         if (this.first === this.last) {
//             this.last = null;
//         }

//         this.first = this.first.next;
//         this.length--;
//         return this.printQueue();
//     }

//     isEmpty() {
//         if (this.length === 0) {
//             return console.log(true);
//         } 

//         return console.log(false);
//     }

//     printQueue() {
//         let currentNode = this.first;
//         let flatArray = [];

//         while (currentNode !== null) {
//             flatArray.push(currentNode.value);
//             currentNode = currentNode.next;
//         }

//         console.log(flatArray);
//     }
// }

// const myQueue = new Queue();

// Joy - Matt - Pavel - Samir
// myQueue.enqueue('Jay');
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// myQueue.enqueue('Samir');
// myQueue.peek();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.isEmpty();

// console.log(myQueue);
