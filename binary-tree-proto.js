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

    // BEST WAY TO SOLVE THIS
    // Draw and visualize
    remove(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        let parentNode = null;

        while (currentNode !== null) {
            if (currentNode.value > value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (currentNode.value < value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                // we have found the node that matches

                // Condition 1: If node has no children
                if (!currentNode.left && !currentNode.right) {
                    parentNode.left.value === value ? parentNode.left = null : parentNode.right = null;
                    return this;
                }

                // Condition 2: If node has no right child
                if (!currentNode.right) {
                    parentNode.left.value === value ? parentNode.left = currentNode.left : parentNode.right = currentNode.left;
                    return this;
                }

                // Condition 3: If node has right child
                // Condition 3.1: Right child has no left child
                if (!currentNode.right.left) {
                    let replacementNode = currentNode.right;
                    replacementNode.left = currentNode.left;
                    parentNode.left.value === value ? parentNode.left = replacementNode : parentNode.right = replacementNode;
                    return this;
                }
                // Condition 3.2: Right child has left child
                let replacementNode = currentNode.right.left;
                let middleNode = currentNode.right;
                middleNode.right = replacementNode.right;
                middleNode.left = replacementNode.left;

                replacementNode.right = middleNode;
                replacementNode.left = currentNode.left;
                parentNode.left.value === value ? parentNode.left = replacementNode : parentNode.right = replacementNode;
                return this;
            }
        }
    }
}

const tree = new BinarySearchTree();

console.log('Insert');
tree.insert(60);
tree.insert(30);
tree.insert(1);
tree.insert(55);
tree.insert(38);
tree.insert(44);
tree.insert(72);
tree.insert(78);

console.log('Lookup');
tree.lookup(4);
tree.lookup(9);

console.log('Remove');
// tree.remove(6);
tree.remove(55);

console.log('Tree Structure');
console.log(JSON.stringify(traverse(tree.root)));

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
