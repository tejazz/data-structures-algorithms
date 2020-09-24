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

        return flatArray;
    }

    insert(index, value) {

    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
