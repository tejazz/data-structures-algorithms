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

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            previous: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value,
            next: null,
            previous: null,
        };

        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = {
            value,
            next: null,
            previous: null,
        };

        newNode.next = this.head;
        this.head.previous = newNode;
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
            previous: null,
        };
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.previous = leader;
        follower.previous = newNode;
        newNode.next = follower;
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

    // TODO
    remove(index) {
        // check params
        let preDeleteIndex = index - 1;

        // delete the last node
        if (index >= this.length) {
            preDeleteIndex = this.length - 2;
        }

        if (index <= 0) {
            this.head = this.head.next;
            this.length--;
            return this.printList();
        }

        let preDeleteNode = this.traverseToIndex(preDeleteIndex);
        let toDeleteNode = preDeleteNode.next;

        preDeleteNode.next = toDeleteNode.next;
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 50);
// myLinkedList.remove(0);
// myLinkedList.remove(100);
// myLinkedList.remove(222);
// myLinkedList.remove(250);
console.log(myLinkedList);
