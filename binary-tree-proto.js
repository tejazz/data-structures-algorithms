// Binary Search Tree
// Level 0: 2^0 = 1
// Level 1: 2^1 = 2
// Level 2: 2^2 = 4
// Level 3: 2^3 = 8

// Total number of nodes = 2^h - 1;
// log nodes = steps

// NOTE
// log 100 = 2
// 10^2 = 100

// O(log n) => Super Fast

// BINARY SEARCH TREE

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

// Naive

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         const newNode = new Node(value);

//         if (this.root === null) {
//             return this.root = newNode;
//         }

//         let currentNode = this.root;

//         while (currentNode !== null) {
//             if (currentNode.value >= value) {
//                 if (!currentNode.left) {
//                     currentNode.left = newNode;
//                     return currentNode = newNode.left;
//                 } else {
//                     currentNode = currentNode.left;
//                 }
//             } else {
//                 if (!currentNode.right) {
//                     currentNode.right = newNode;
//                     currentNode = newNode.right;
//                 } else {
//                     currentNode = currentNode.right;
//                 }
//             }
//         }
//     }

//     lookup(value) {
//         let currentNode = this.root;

//         while (currentNode !== null) {
//             if (currentNode.value === value) {
//                 return console.log(currentNode);
//             }

//             if (currentNode.value > value) {
//                 currentNode = currentNode.left;
//             } else {
//                 currentNode = currentNode.right;
//             }
//         }

//         return console.log('No value found');
//     }

//     remove(value) { }
// }

// Instructional 

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while (true) {
                if (value <= currentNode.value) {
                    // Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    } 
                    currentNode = currentNode.left;
                } else {
                    // Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    } 
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return currentNode;
            }
        }

        return false;
    }

    remove(value) {
    }
}

const tree = new BinarySearchTree();
console.log('Insert');
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
console.log('Lookup');
tree.lookup(4);
tree.lookup(9);
console.log('Tree Structure');
console.log(traverse(tree.root));

// TREE EXAMPLE
//          9
//      4       20
//    1   6   15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
