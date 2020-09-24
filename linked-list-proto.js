// 10 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null,
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value,
            next: null,
        };

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = {
            value,
            next: null,
        };

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printList() {
        let currentNode = this.head;
        let flatArray = [];
        while (currentNode !== null) {
            flatArray.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(flatArray);
    }

    // insert(index, value) {
    //     if (index === 0) {
    //         this.prepend(value);
    //         return this.printList();
    //     }

    //     let currentNode = this.head;
    //     let insertNode = {
    //         value,
    //         next: null,
    //     };
    //     let currentIndex = 0;

    //     while (currentNode !== null) {
    //         if (currentIndex === index - 1) {
    //             insertNode.next = currentNode.next;
    //             currentNode.next = insertNode;
    //         }

    //         currentIndex++;
    //         currentNode = currentNode.next;
    //     }

    //     return this.printList();
    // }

    // Second Approach
    insert(index, value) {
        // check params
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        const newNode = {
            value,
            next: null,
        };
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 50);
