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
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        console.log(this.top);
    }

    pop() {
        if (!this.top) {
            return this.printStack();
        }

        let deleteNode = this.top;
        this.top = this.top.next;
        this.length--;

        if (this.length === 0) {
            this.bottom = null;
        }

        return this.printStack();
    }

    push(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
            return this.printStack();
        }

        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this.printStack();
    }

    printStack() {
        let currentNode = this.top;
        let flatArray = [];

        while(currentNode !== null) {
            flatArray.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(flatArray);
    }
} 

let myStack = new Stack();

// Example Input:
// Discord, Google, Udemy
myStack.push('Discord');
myStack.push('Google');
myStack.push('Udemy');
myStack.pop();
myStack.peek();

console.log(myStack);
